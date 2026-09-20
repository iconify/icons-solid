import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gwcm3lrmd.css';
import '../../css/n/n93n94dwg.css';
import '../../css/i/iuly8y1mo.css';
import '../../css/u/uco5q0b0p.css';
import '../../css/f/fnxdf_bht.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gwcm3lrmd"/><path class="n93n94dwg"/><path clip-rule="evenodd" class="iuly8y1mo"/><path class="uco5q0b0p"/><path clip-rule="evenodd" class="fnxdf_bht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:blood-donate-drop-flat"} {...others} />);
}

export default Component;
