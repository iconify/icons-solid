import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n9ycfgbml.css';
import '../../css/d/drb1r_bnp.css';
import '../../css/k/ktmbf04te.css';
import '../../css/t/t1kem48fi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n9ycfgbml wm-k"/><path class="drb1r_bnp wm-a"/><path class="ktmbf04te wm-k"/><path class="t1kem48fi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:superscript-sketch"} {...others} />);
}

export default Component;
