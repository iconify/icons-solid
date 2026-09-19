import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jty7kd72t.css';
import '../../css/m/mdahkqbzi.css';
import '../../css/f/ftv2nez3w.css';
import '../../css/l/lvc2twb-d.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGdPAaMbgP" x1="64" x2="64" y1="2.16" y2="125.84" gradientUnits="userSpaceOnUse"><stop offset="0" class="jty7kd72t"/><stop offset="1" class="mdahkqbzi"/></linearGradient></defs><rect fill="url(#SVGdPAaMbgP)" class="ftv2nez3w"/><path class="lvc2twb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:behance"} {...others} />);
}

export default Component;
