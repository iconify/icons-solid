import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r4l7ckptj.css';
import '../../css/m/mg6_t5b9m.css';
import '../../css/v/vv-z5phem.css';
import '../../css/k/k8owyt_1k.css';
import '../../css/c/cbbomjbhn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="r4l7ckptj"/><path class="mg6_t5b9m"/><path class="vv-z5phem"/><path class="k8owyt_1k"/><path class="cbbomjbhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:repeat-once-bold"} {...others} />);
}

export default Component;
