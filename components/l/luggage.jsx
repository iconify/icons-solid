import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s2wp1ubcr.css';
import '../../css/i/iilbxu-wy.css';
import '../../css/l/lc1kdqbaj.css';
import '../../css/m/mosb5acyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="s2wp1ubcr wm-shadow"/><path class="iilbxu-wy wm-shadow"/><path class="lc1kdqbaj"/><path class="mosb5acyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:luggage"} {...others} />);
}

export default Component;
