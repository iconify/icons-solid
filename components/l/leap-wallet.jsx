import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j8bqdtl8x.css';
import '../../css/k/k0j2rac5e.css';
import '../../css/i/ip44jtdsq.css';
import '../../css/a/ai3xo7qdw.css';
import '../../css/t/tj-i09byl.css';

const viewBox = {"width":166,"height":166};
const content = `<g class="ft5dv1b6b"><path class="j8bqdtl8x"/><path class="k0j2rac5e"/><path class="ip44jtdsq"/><path class="ai3xo7qdw"/><path class="tj-i09byl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:leap-wallet"} {...others} />);
}

export default Component;
