import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ouoaj-ffm.css';
import '../../css/k/k2yjdebhd.css';
import '../../css/d/dka_nn2km.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="ouoaj-ffm"/><rect class="k2yjdebhd"/><path class="dka_nn2km"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:computer-screen-tv-movies-television-cathode-crt-tv-ray-tube-vintage-video"} {...others} />);
}

export default Component;
