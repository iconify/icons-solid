import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sci640bhs.css';
import '../../css/b/bj-rp9qcq.css';
import '../../css/t/tv7ggr2_t.css';
import '../../css/a/azxfktbgs.css';
import '../../css/z/zhjtmfbrj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sci640bhs wm-k"/><path class="bj-rp9qcq wm-a"/><path class="tv7ggr2_t wm-shadow"/><path class="azxfktbgs wm-k"/><path class="wm-a zhjtmfbrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-last-engrave"} {...others} />);
}

export default Component;
