import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/vf3vq5btc.css';
import '../../css/f/fr_-i6bps.css';
import '../../css/y/yc0nkofwz.css';
import '../../css/x/xqwqujbhl.css';
import '../../css/f/fe0c20cjo.css';
import '../../css/d/d98-m0bhn.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="vf3vq5btc"/><path class="fr_-i6bps"/><path class="yc0nkofwz"/><path class="xqwqujbhl"/><path class="fe0c20cjo"/><path class="d98-m0bhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-bo"} {...others} />);
}

export default Component;
