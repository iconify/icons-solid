import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecq0xnbrm.css';
import '../../css/l/laptyg_6p.css';
import '../../css/n/nmtf4hhbz.css';

const viewBox = {"width":128,"height":128};
const content = `<filter id="SVGQZbgxPcv" width="1.137" height="1.27" x="-.069" y="-.135" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="7.49"/></filter><path filter="url(#SVGQZbgxPcv)" transform="translate(75.053 41.52)scale(.08238)" class="ecq0xnbrm"/><path class="laptyg_6p"/><path class="nmtf4hhbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:kalilinux-wordmark"} {...others} />);
}

export default Component;
