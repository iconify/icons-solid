import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jviohsbmh.css';
import '../../css/h/he3kxyb_v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jviohsbmh"/><path class="he3kxyb_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lock-48-bold"} {...others} />);
}

export default Component;
