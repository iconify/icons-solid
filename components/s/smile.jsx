import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzwk4_bwa.css';
import '../../css/n/n-_sm0bbz.css';
import '../../css/b/bsou88brs.css';
import '../../css/d/d9wk5wbku.css';
import '../../css/u/u0q1p7bwi.css';
import '../../css/j/joq516bqq.css';
import '../../css/w/woeczwqgf.css';
import '../../css/q/qz5qiwy8n.css';
import '../../css/v/vgl3klwnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mzwk4_bwa wm-k"/><path class="n-_sm0bbz wm-k"/><path class="bsou88brs wm-k"/><path class="d9wk5wbku wm-shine"/><path class="u0q1p7bwi wm-a"/><path class="joq516bqq wm-a"/><path class="wm-shine woeczwqgf"/><path class="qz5qiwy8n wm-a"/><path class="vgl3klwnz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:smile"} {...others} />);
}

export default Component;
