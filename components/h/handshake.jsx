import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ipj7zt6mi.css';
import '../../css/f/fg7v-gbhz.css';
import '../../css/f/fvus08bgw.css';
import '../../css/e/e4q0uqbgz.css';
import '../../css/w/w05zvfbve.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ipj7zt6mi"/><path class="fg7v-gbhz"/><path class="fvus08bgw"/><rect class="e4q0uqbgz"/><rect class="w05zvfbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:handshake"} {...others} />);
}

export default Component;
