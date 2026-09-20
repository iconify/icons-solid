import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnfyskynu.css';
import '../../css/u/uhzk_qbaq.css';
import '../../css/x/xl_cnabsn.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGKUj4hbnV" x1="-48.712" x2="-47.692" y1="653.259" y2="653.259" gradientTransform="matrix(187.3057 450.9798 384.0336 -219.9575 -241602.61 165595.125)" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnfyskynu"/><stop offset="1" class="uhzk_qbaq"/></linearGradient><path fill="url(#SVGKUj4hbnV)" class="xl_cnabsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextdns"} {...others} />);
}

export default Component;
