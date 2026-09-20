import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/la-3nhbeb.css';
import '../../css/w/w8axghvbk.css';
import '../../css/r/r3aof507d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="la-3nhbeb"/><path class="w8axghvbk"/><path class="r3aof507d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:location-pin-3"} {...others} />);
}

export default Component;
