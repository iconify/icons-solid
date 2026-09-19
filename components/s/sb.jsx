import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cerazxb3v.css';
import '../../css/p/p7g9b60_x.css';
import '../../css/t/t19qk_bxn.css';
import '../../css/s/s6ecdhm2r.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="cerazxb3v"/><path class="p7g9b60_x"/><path class="t19qk_bxn"/><path class="s6ecdhm2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:sb"} {...others} />);
}

export default Component;
