import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qepuaqbvx.css';
import '../../css/d/de85-5bgy.css';
import '../../css/v/v_z2_2ozx.css';
import '../../css/p/p-_uobtrq.css';
import '../../css/v/vwxfq0epe.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)" class="qepuaqbvx"><path class="de85-5bgy"/><ellipse transform="rotate(-14 10.82 7.266)" class="v_z2_2ozx"/><path class="p-_uobtrq"/><ellipse transform="rotate(-14 17.203 10.984)" class="vwxfq0epe"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:two-keys-outline"} {...others} />);
}

export default Component;
