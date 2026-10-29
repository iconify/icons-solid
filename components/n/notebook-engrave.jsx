import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j1w5ydbfp.css';
import '../../css/r/rxu9rsydk.css';
import '../../css/p/pd2dgpb5t.css';
import '../../css/c/ctaobdbfw.css';
import '../../css/z/zpd26ob0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="j1w5ydbfp wm-k"/><path class="rxu9rsydk wm-a"/><path class="pd2dgpb5t wm-shadow"/><path class="ctaobdbfw wm-k"/><path class="wm-a zpd26ob0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:notebook-engrave"} {...others} />);
}

export default Component;
