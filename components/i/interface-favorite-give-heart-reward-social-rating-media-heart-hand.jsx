import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqpk5pbui.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="uqpk5pbui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-favorite-give-heart-reward-social-rating-media-heart-hand"} {...others} />);
}

export default Component;
