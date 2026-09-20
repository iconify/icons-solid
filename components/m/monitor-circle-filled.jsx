import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/d/d4uiovtmd.css';
import '../../css/x/xfqauol3x.css';
import '../../css/a/aw5j0obfz.css';
import '../../css/k/ktr_qhbea.css';
import '../../css/o/owa4l2cof.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVGBY3trbxU"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="d4uiovtmd"/><path class="xfqauol3x"/><path clip-rule="evenodd" class="aw5j0obfz"/><path class="ktr_qhbea"/><path clip-rule="evenodd" class="owa4l2cof"/></g></mask></defs><circle mask="url(#SVGBY3trbxU)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:monitor-circle-filled"} {...others} />);
}

export default Component;
