import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zoj03-bkh.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zoj03-bkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-award-half-star-reward-rating-rate-social-star-media-favorite-like-stars-half"} {...others} />);
}

export default Component;
