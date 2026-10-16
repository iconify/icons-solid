import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fyo9awbxy.css';
import '../../css/i/iip25ub1u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fyo9awbxy"/><path class="iip25ub1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:used-cooking-oil-48-bold"} {...others} />);
}

export default Component;
