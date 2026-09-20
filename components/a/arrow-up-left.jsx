import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf6u91bpy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pf6u91bpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:arrow-up-left"} {...others} />);
}

export default Component;
