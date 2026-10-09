import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlrq1pb6a.css';
import '../../css/q/qiqf2wm_a.css';
import '../../css/a/artzn1ocz.css';
import '../../css/m/mlxt40bpy.css';
import '../../css/n/nw-12wbkf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zlrq1pb6a"/><path class="qiqf2wm_a"/><path class="artzn1ocz"/><path class="mlxt40bpy"/><path class="nw-12wbkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-sink-20-bold"} {...others} />);
}

export default Component;
