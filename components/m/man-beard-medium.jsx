import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svepbw1vr.css';
import '../../css/q/qgyfpzbja.css';
import '../../css/b/bqe8czbuo.css';
import '../../css/z/zt-yq_v8b.css';
import '../../css/h/hdr9guboz.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/c/cnwgomljg.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/g/gv8djvueq.css';
import '../../css/g/ggm9umbxx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="svepbw1vr"/><path class="qgyfpzbja"/><path class="bqe8czbuo"/><path class="zt-yq_v8b"/><path class="hdr9guboz"/><path class="ps7z7wb7n"/><path class="cnwgomljg"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="gv8djvueq"/><path class="ggm9umbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-beard-medium"} {...others} />);
}

export default Component;
