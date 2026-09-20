import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7m83e-jp.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="e7m83e-jp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars"} {...others} />);
}

export default Component;
