import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlhsgv7mu.css';
import '../../css/c/crkxmswra.css';
import '../../css/y/y9mxc-j5y.css';
import '../../css/h/hze_7mdac.css';
import '../../css/k/kn5v83hml.css';
import '../../css/w/wskurvbix.css';
import '../../css/z/zma_p_bnf.css';
import '../../css/o/ohaeesjny.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/j/j1ig29b4m.css';
import '../../css/a/ayoh-_bxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jlhsgv7mu"/><path class="crkxmswra"/><path class="y9mxc-j5y"/><path class="hze_7mdac"/><path class="kn5v83hml"/><path class="wskurvbix"/><path class="zma_p_bnf"/><path class="ohaeesjny"/><g class="xtpeb-edw"><path class="j1ig29b4m"/><path class="ayoh-_bxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-bold-duotone"} {...others} />);
}

export default Component;
