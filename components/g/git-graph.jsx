import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg9jojsnm.css';
import '../../css/b/b4w7ge89f.css';
import '../../css/j/jc5n675mh.css';
import '../../css/c/c8qdaqi3q.css';
import '../../css/l/l3u028byy.css';
import '../../css/q/qhvxvybdu.css';
import '../../css/i/iuds_lbxf.css';
import '../../css/o/oyki3cc9n.css';
import '../../css/a/arxo64i5r.css';
import '../../css/y/y0zzk6b_d.css';
import '../../css/b/b-s_85bwe.css';
import '../../css/t/tthnh0bpm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kg9jojsnm wm-shadow"/><path class="b4w7ge89f wm-k"/><path class="jc5n675mh wm-k"/><path class="c8qdaqi3q wm-k"/><path class="l3u028byy wm-k"/><path class="qhvxvybdu wm-k"/><path class="iuds_lbxf wm-shine"/><path class="oyki3cc9n wm-a"/><path class="arxo64i5r wm-a"/><path class="wm-a y0zzk6b_d"/><path class="b-s_85bwe wm-a"/><path class="tthnh0bpm wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:git-graph"} {...others} />);
}

export default Component;
