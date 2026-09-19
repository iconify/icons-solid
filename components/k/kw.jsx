import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cju7w2k_k.css';
import '../../css/t/tvyc15znc.css';
import '../../css/c/c4d0165ua.css';
import '../../css/g/g6py6hitn.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="cju7w2k_k"/><path class="tvyc15znc"/><path class="c4d0165ua"/><path class="g6py6hitn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:kw"} {...others} />);
}

export default Component;
