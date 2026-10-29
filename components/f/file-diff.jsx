import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmmbso2mc.css';
import '../../css/h/hb11f522t.css';
import '../../css/q/qzikixlwr.css';
import '../../css/m/m52o71bpt.css';
import '../../css/q/qi7b_pb3f.css';
import '../../css/v/v9xy98bwo.css';
import '../../css/n/nyb0l7b9h.css';
import '../../css/w/wp4zwhd6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cmmbso2mc wm-shadow"/><path class="hb11f522t wm-k"/><path class="qzikixlwr wm-k"/><path class="m52o71bpt wm-k"/><path class="qi7b_pb3f wm-k"/><path class="v9xy98bwo wm-shine"/><path class="nyb0l7b9h wm-k"/><path class="wm-a wp4zwhd6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:file-diff"} {...others} />);
}

export default Component;
