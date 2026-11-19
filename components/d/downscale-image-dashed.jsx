import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqcihi0ya.css';
import '../../css/e/ej9m1bu1q.css';
import '../../css/q/qwy_xqbmo.css';
import '../../css/u/ucgrjvbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yqcihi0ya"/><path clip-rule="evenodd" class="ej9m1bu1q"/><path class="qwy_xqbmo"/><path class="ucgrjvbxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:downscale-image-dashed"} {...others} />);
}

export default Component;
