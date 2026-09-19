import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mm_wv7bbg.css';
import '../../css/t/tk_4_rb0i.css';
import '../../css/o/ovk8-8bds.css';
import '../../css/v/vlei0bbgn.css';
import '../../css/n/nwwdgzb6q.css';
import '../../css/q/qzdjira8n.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="mm_wv7bbg"/><path class="tk_4_rb0i"/><path class="ovk8-8bds"/><path class="vlei0bbgn"/><path class="nwwdgzb6q"/><path class="qzdjira8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:yt"} {...others} />);
}

export default Component;
