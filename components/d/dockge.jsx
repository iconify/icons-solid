import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mylrgib3j.css';
import '../../css/t/tr0fwwk_h.css';
import '../../css/o/oyulphfdn.css';
import '../../css/b/b2gym-hlg.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG3lO35cJa" x1="270.9" x2="423.2" y1="296.3" y2="442.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="mylrgib3j"/><stop offset="1" class="tr0fwwk_h"/></linearGradient><path fill="url(#SVG3lO35cJa)" class="oyulphfdn"/><path class="b2gym-hlg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dockge"} {...others} />);
}

export default Component;
