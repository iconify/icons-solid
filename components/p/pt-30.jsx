import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/l/lxbmzzb1o.css';
import '../../css/q/q3bg5lk2i.css';
import '../../css/x/xf-67uxal.css';
import '../../css/d/d6gincb2u.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="lxbmzzb1o"/><path class="q3bg5lk2i"/><path class="xf-67uxal"/><path class="d6gincb2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:pt-30"} {...others} />);
}

export default Component;
