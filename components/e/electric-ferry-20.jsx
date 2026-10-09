import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry_fo9lxv.css';
import '../../css/x/x7suexyet.css';
import '../../css/e/eeqn6pbwj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ry_fo9lxv"/><path class="x7suexyet"/><path class="eeqn6pbwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-ferry-20"} {...others} />);
}

export default Component;
