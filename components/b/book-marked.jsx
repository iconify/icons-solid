import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhy8j5gdx.css';
import '../../css/w/wcx_0x5ex.css';
import '../../css/w/wf_cdt0fb.css';
import '../../css/h/h776kkien.css';
import '../../css/t/twzcjpbrr.css';
import '../../css/w/wcb2lnb1p.css';
import '../../css/h/hgpdaebny.css';
import '../../css/a/anspbw_1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nhy8j5gdx wm-shadow"/><path class="wcx_0x5ex wm-shadow"/><path class="wf_cdt0fb"/><path class="h776kkien"/><path class="twzcjpbrr"/><path class="wcb2lnb1p"/><path class="hgpdaebny"/><path class="anspbw_1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:book-marked"} {...others} />);
}

export default Component;
