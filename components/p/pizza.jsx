import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j34y3d5_z.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-mr21bme.css';
import '../../css/o/otj2g5hbk.css';
import '../../css/f/fzo49hb8k.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGt7ktWqcX" width="20" height="16" x="2" y="4" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="j34y3d5_z"/></mask><g class="ft5dv1b6b"><path class="e-mr21bme"/><path class="otj2g5hbk"/><g mask="url(#SVGt7ktWqcX)"><path clip-rule="evenodd" class="fzo49hb8k"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pizza"} {...others} />);
}

export default Component;
