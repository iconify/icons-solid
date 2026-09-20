import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a871ihfnc.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/b/b9qsqtbcp.css';
import '../../css/j/jxk_lacrr.css';
import '../../css/t/txcsnsb9z.css';
import '../../css/y/yq4qq6i0p.css';
import '../../css/f/finyq75fi.css';
import '../../css/b/byabkegeg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="a871ihfnc"/><g class="sxsjrzbyv"><path clip-rule="evenodd" transform="translate(0 .002) matrix(.2558 0 0 .2556 -2.456 -173.6)" class="b9qsqtbcp"/><path clip-rule="evenodd" transform="translate(0 .002) matrix(.2555 0 0 .2493 -2.43 -168.4)" class="jxk_lacrr"/><path clip-rule="evenodd" transform="translate(0 .002) matrix(.2558 0 0 .2556 -2.456 -173.6)" class="txcsnsb9z"/><path clip-rule="evenodd" transform="translate(0 .002) matrix(.2558 0 0 .2556 -2.456 -174.4)" class="yq4qq6i0p"/><path clip-rule="evenodd" transform="translate(0 .002) matrix(.2558 0 0 .2556 -2.456 -174.4)" class="finyq75fi"/><path class="byabkegeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:japanese-vacancy-button"} {...others} />);
}

export default Component;
