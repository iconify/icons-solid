import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ys8x38buo.css';
import '../../css/k/ksu5_gbsv.css';
import '../../css/k/k6p5a8bek.css';
import '../../css/q/qwrl1299h.css';
import '../../css/h/hapjozblf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k ys8x38buo"/><path class="ksu5_gbsv wm-a"/><path class="k6p5a8bek wm-shadow"/><path class="qwrl1299h wm-k"/><path class="hapjozblf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:beer-engrave"} {...others} />);
}

export default Component;
