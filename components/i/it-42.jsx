import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/f_bsmidhr.css';
import '../../css/m/m3spc-bae.css';
import '../../css/u/u17cy2bhy.css';
import '../../css/s/sb041cbex.css';
import '../../css/j/j7-ofybyj.css';
import '../../css/w/we5ou6goa.css';
import '../../css/w/wt-_np59o.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="f_bsmidhr"/><path class="m3spc-bae"/><path class="u17cy2bhy"/><path class="sb041cbex"/><path class="j7-ofybyj"/><path class="we5ou6goa"/><path class="wt-_np59o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:it-42"} {...others} />);
}

export default Component;
