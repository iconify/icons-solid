import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/arp-ntbmm.css';
import '../../css/k/kx4ifib2u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="arp-ntbmm"/><path class="kx4ifib2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-hotel-three-star-three-stars-reviews-review-rating-hotel-star"} {...others} />);
}

export default Component;
