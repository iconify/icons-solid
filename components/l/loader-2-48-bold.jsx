import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbvg1o4cn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tbvg1o4cn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:loader-2-48-bold"} {...others} />);
}

export default Component;
