import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/ruj7-actu.css';
import '../../css/c/czr0h0u1g.css';
import '../../css/x/xq2s-olke.css';
import '../../css/k/khx_ucboz.css';
import '../../css/u/u4f5wcb8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ruj7-actu wm-shadow"/><path class="czr0h0u1g wm-shadow"/><path class="xq2s-olke"/><path class="khx_ucboz"/><path class="u4f5wcb8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:headset"} {...others} />);
}

export default Component;
