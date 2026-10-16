import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7ob8sbdr.css';
import '../../css/k/kux8a1jyn.css';
import '../../css/a/aho46rbzr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w7ob8sbdr"/><path class="kux8a1jyn"/><path class="aho46rbzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lidar-20-bold"} {...others} />);
}

export default Component;
