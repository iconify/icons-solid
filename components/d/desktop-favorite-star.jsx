import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/atx0ukbdu.css';
import '../../css/f/fc6qeabax.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="atx0ukbdu"/><path class="fc6qeabax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:desktop-favorite-star"} {...others} />);
}

export default Component;
