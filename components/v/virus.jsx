import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_dze859w.css';
import '../../css/t/tzzq3wbge.css';
import '../../css/y/ygsq_za6j.css';
import '../../css/r/r7pxqjnqg.css';
import '../../css/q/qhtnofuzf.css';
import '../../css/d/dv6ik-bax.css';
import '../../css/m/my4l-0bxv.css';
import '../../css/a/acnqmessj.css';
import '../../css/r/rxnvkbqqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j_dze859w wm-shadow"/><path class="tzzq3wbge"/><path class="ygsq_za6j"/><path class="r7pxqjnqg"/><path class="qhtnofuzf"/><path class="dv6ik-bax"/><path class="my4l-0bxv wm-shine"/><path class="acnqmessj"/><path class="rxnvkbqqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:virus"} {...others} />);
}

export default Component;
