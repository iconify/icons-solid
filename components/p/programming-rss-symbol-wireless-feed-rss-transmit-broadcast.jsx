import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nkw5_c53b.css';
import '../../css/z/zp6h8d_gb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="nkw5_c53b"/><path class="zp6h8d_gb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:programming-rss-symbol-wireless-feed-rss-transmit-broadcast"} {...others} />);
}

export default Component;
