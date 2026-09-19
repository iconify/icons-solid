import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkkc99bna.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h2zuz7bde.css';
import '../../css/p/phq3rqbpn.css';
import '../../css/e/eq-t1n3kg.css';
import '../../css/i/ijd_aip4q.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGKmUmGbAK"><path class="xkkc99bna"/></clipPath></defs><g clip-path="url(#SVGKmUmGbAK)" transform="scale(1.0321)" class="d2kvgvbvc"><path class="h2zuz7bde"/><path class="phq3rqbpn"/><path class="eq-t1n3kg"/><path class="ijd_aip4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:tl-1x1"} {...others} />);
}

export default Component;
