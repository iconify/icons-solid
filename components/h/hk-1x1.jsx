import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktj_s9fwf.css';
import '../../css/l/l_k5w5_ge.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ktj_s9fwf"/><path id="SVGg6HuSbAj" class="l_k5w5_ge"/><use href="#SVGg6HuSbAj" transform="rotate(72 248.5 259.5)"/><use href="#SVGg6HuSbAj" transform="rotate(144 248.5 259.5)"/><use href="#SVGg6HuSbAj" transform="rotate(216 248.5 259.5)"/><use href="#SVGg6HuSbAj" transform="rotate(288 248.5 259.5)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:hk-1x1"} {...others} />);
}

export default Component;
