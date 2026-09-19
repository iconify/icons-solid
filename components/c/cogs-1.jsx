import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kl9x8cb_k.css';
import '../../css/p/pj3sukt2m.css';
import '../../css/l/lu7yfhe2a.css';
import '../../css/m/mu5jj2lmh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="kl9x8cb_k"/><path class="pj3sukt2m"/><path class="lu7yfhe2a"/><path class="mu5jj2lmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cogs-1"} {...others} />);
}

export default Component;
