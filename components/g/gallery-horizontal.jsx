import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bijra0bro.css';
import '../../css/s/ssaun77uk.css';
import '../../css/j/j5b1d9bxo.css';
import '../../css/o/omtqkcbfk.css';
import '../../css/o/od38u2bjg.css';
import '../../css/a/av_7_-b0w.css';
import '../../css/p/pm7p2bb8q.css';
import '../../css/g/g7n_aza7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bijra0bro"/><path class="ssaun77uk"/><path class="j5b1d9bxo wm-shine"/><path class="omtqkcbfk wm-k"/><path class="od38u2bjg wm-a"/><path class="av_7_-b0w"/><path class="pm7p2bb8q"/><path class="g7n_aza7w wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:gallery-horizontal"} {...others} />);
}

export default Component;
