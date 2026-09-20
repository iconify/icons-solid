import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwc2otxjo.css';
import '../../css/j/jgki9joty.css';
import '../../css/t/tdlcmtbvn.css';
import '../../css/b/bodo10bfa.css';
import '../../css/d/dl21ks3-j.css';
import '../../css/g/ghguupb2i.css';
import '../../css/b/b61-w2lmx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jwc2otxjo"/><path class="jgki9joty"/><path class="tdlcmtbvn"/><linearGradient id="SVGOorKlHJR" x1="33.773" x2="478.227" y1="505.318" y2="60.865" gradientUnits="userSpaceOnUse"><stop offset=".006" class="bodo10bfa"/><stop offset=".788" class="dl21ks3-j"/></linearGradient><path fill="url(#SVGOorKlHJR)" class="ghguupb2i"/><path class="b61-w2lmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fluidcalendar"} {...others} />);
}

export default Component;
