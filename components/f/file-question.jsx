import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmmbso2mc.css';
import '../../css/h/hb11f522t.css';
import '../../css/q/qzikixlwr.css';
import '../../css/m/m52o71bpt.css';
import '../../css/q/qi7b_pb3f.css';
import '../../css/v/v9xy98bwo.css';
import '../../css/n/nyb0l7b9h.css';
import '../../css/b/belrhvbrg.css';
import '../../css/o/o90es8b0e.css';
import '../../css/b/b294thb6k.css';
import '../../css/r/ryzzqybou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cmmbso2mc wm-shadow"/><path class="hb11f522t wm-k"/><path class="qzikixlwr wm-k"/><path class="m52o71bpt wm-k"/><path class="qi7b_pb3f wm-k"/><path class="v9xy98bwo wm-shine"/><path class="nyb0l7b9h wm-k"/><path class="belrhvbrg wm-a"/><path class="o90es8b0e wm-a"/><path class="b294thb6k wm-a"/><path class="ryzzqybou wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:file-question"} {...others} />);
}

export default Component;
