import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s82fq8gtj.css';
import '../../css/l/ljkb0tzsh.css';
import '../../css/m/mltron2ng.css';
import '../../css/t/tpdg9m6do.css';
import '../../css/h/ht-coccjk.css';
import '../../css/g/g40bcpb_o.css';
import '../../css/b/b76eybc-w.css';
import '../../css/c/ca03ph9bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s82fq8gtj"/><path class="ljkb0tzsh"/><path class="mltron2ng"/><path class="tpdg9m6do"/><path class="ht-coccjk"/><path class="g40bcpb_o"/><path class="b76eybc-w"/><path class="ca03ph9bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-knob-outline"} {...others} />);
}

export default Component;
