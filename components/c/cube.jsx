import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/v3v0ln4og.css';
import '../../css/q/q558r9bbr.css';
import '../../css/r/rw6hr3tub.css';
import '../../css/e/ennyudbul.css';
import '../../css/v/v9o3o9rhk.css';
import '../../css/k/keturobrq.css';
import '../../css/k/kl2xqqqnk.css';
import '../../css/g/g6uvg3x9y.css';
import '../../css/h/hd2wv79yc.css';
import '../../css/t/tspo2jb3i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="v3v0ln4og"/><path class="q558r9bbr"/><path class="rw6hr3tub"/><path class="ennyudbul"/><path class="v9o3o9rhk"/><path class="keturobrq"/><path class="kl2xqqqnk"/><path class="g6uvg3x9y"/><path class="hd2wv79yc"/><path class="tspo2jb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cube"} {...others} />);
}

export default Component;
