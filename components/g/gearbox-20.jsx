import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfsyys30a.css';
import '../../css/h/hti4-6bvb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wfsyys30a"/><path class="hti4-6bvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gearbox-20"} {...others} />);
}

export default Component;
