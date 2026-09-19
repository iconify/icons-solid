import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ylhx5jbuy.css';
import '../../css/k/kp6x66biy.css';
import '../../css/r/rp-5i7zrq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ylhx5jbuy"/><path class="kp6x66biy"/><path class="rp-5i7zrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bike"} {...others} />);
}

export default Component;
