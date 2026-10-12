import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/by19f6bep.css';
import '../../css/f/fvqsv5bpy.css';
import '../../css/o/o28clgvxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="by19f6bep"/><rect class="fvqsv5bpy"/><path class="o28clgvxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-tv"} {...others} />);
}

export default Component;
