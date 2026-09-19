import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgir3obew.css';
import '../../css/z/z0erurbqs.css';
import '../../css/u/usad67anb.css';
import '../../css/l/lhnldgb-j.css';
import '../../css/i/iuniymeum.css';
import '../../css/i/iti8vs0fy.css';
import '../../css/m/mrc6tibcg.css';
import '../../css/e/ev3ixqjgs.css';
import '../../css/y/yym46pb3f.css';
import '../../css/d/dkle7x4ac.css';
import '../../css/n/nkhbidczj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qgir3obew"/><path class="z0erurbqs"/><path class="usad67anb"/><path class="lhnldgb-j"/><path class="iuniymeum"/><path class="iti8vs0fy"/><path clip-rule="evenodd" class="mrc6tibcg"/><path class="ev3ixqjgs"/><path class="yym46pb3f"/><path class="dkle7x4ac"/><path class="nkhbidczj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-facepalming"} {...others} />);
}

export default Component;
