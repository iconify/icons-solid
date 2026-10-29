import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v_-z67bjr.css';
import '../../css/f/fbtsz5b1h.css';
import '../../css/r/ra8smr1ma.css';
import '../../css/e/egx1okpdi.css';
import '../../css/c/chfexdi1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="v_-z67bjr wm-k"/><path class="fbtsz5b1h wm-a"/><path class="ra8smr1ma wm-shadow"/><path class="egx1okpdi wm-k"/><path class="chfexdi1f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-first-engrave"} {...others} />);
}

export default Component;
