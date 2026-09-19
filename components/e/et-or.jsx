import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/l/lb-lfcbse.css';
import '../../css/o/o0nuu56uu.css';
import '../../css/c/cuvggmbph.css';
import '../../css/o/o3nwkuxfs.css';
import '../../css/o/oh_qkwbws.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="lb-lfcbse"/><path class="o0nuu56uu"/><path class="cuvggmbph"/><path class="o3nwkuxfs"/><path class="oh_qkwbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:et-or"} {...others} />);
}

export default Component;
