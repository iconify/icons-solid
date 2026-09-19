import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/l/lb-lfcbse.css';
import '../../css/p/p0ad9joga.css';
import '../../css/i/ihzozbb-k.css';
import '../../css/u/ud4hrkbmb.css';
import '../../css/p/p4n8cxu4v.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="lb-lfcbse"/><path class="p0ad9joga"/><path class="ihzozbb-k"/><path class="ud4hrkbmb"/><path class="p4n8cxu4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:et-so"} {...others} />);
}

export default Component;
