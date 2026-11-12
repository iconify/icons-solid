import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-psrt76d.css';
import '../../css/d/dhxkdbeki.css';
import '../../css/u/ucvfswa3p.css';
import '../../css/a/arvpzbcbo.css';
import '../../css/h/has2ks4iz.css';
import '../../css/o/oenwiybce.css';
import '../../css/y/y48y1ki4f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j-psrt76d"/><linearGradient id="SVG5JZYzeUM" x1="88.2" x2="88.2" y1="415.5" y2="209.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="dhxkdbeki"/><stop offset=".3" class="ucvfswa3p"/><stop offset=".6" class="arvpzbcbo"/><stop offset=".8" class="has2ks4iz"/></linearGradient><path fill="url(#SVG5JZYzeUM)" class="oenwiybce"/><linearGradient id="SVG3SFSzbNm" x1="306.6" x2="512.5" y1="174" y2="174" gradientUnits="userSpaceOnUse"><stop offset="0" class="dhxkdbeki"/><stop offset=".3" class="ucvfswa3p"/><stop offset=".6" class="arvpzbcbo"/><stop offset=".8" class="has2ks4iz"/></linearGradient><path fill="url(#SVG3SFSzbNm)" class="y48y1ki4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:resilio-sync"} {...others} />);
}

export default Component;
