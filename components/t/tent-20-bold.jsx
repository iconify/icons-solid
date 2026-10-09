import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8gmoubzb.css';
import '../../css/o/oji4_ybzh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g8gmoubzb"/><path class="oji4_ybzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tent-20-bold"} {...others} />);
}

export default Component;
