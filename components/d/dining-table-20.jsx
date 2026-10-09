import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxtlldbyo.css';
import '../../css/d/dezgnhv9l.css';
import '../../css/q/qqf7r7bcl.css';
import '../../css/c/c2ym01bpy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wxtlldbyo"/><path class="dezgnhv9l"/><path class="qqf7r7bcl"/><path class="c2ym01bpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dining-table-20"} {...others} />);
}

export default Component;
