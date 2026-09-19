import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6i7zgbpr.css';
import '../../css/z/z0erurbqs.css';
import '../../css/t/t8lpi-zlm.css';
import '../../css/y/y91i8xbdk.css';
import '../../css/i/i-6lzwbzp.css';
import '../../css/x/xtm4qm4_e.css';
import '../../css/z/zpjexf63n.css';
import '../../css/d/d4itq5bla.css';
import '../../css/o/oovzil-oo.css';
import '../../css/d/dkle7x4ac.css';
import '../../css/n/nkhbidczj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="k6i7zgbpr"/><path class="z0erurbqs"/><path class="t8lpi-zlm"/><path class="y91i8xbdk"/><path class="i-6lzwbzp"/><path class="xtm4qm4_e"/><path clip-rule="evenodd" class="zpjexf63n"/><path class="d4itq5bla"/><path class="oovzil-oo"/><path class="dkle7x4ac"/><path class="nkhbidczj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-facepalming-dark"} {...others} />);
}

export default Component;
