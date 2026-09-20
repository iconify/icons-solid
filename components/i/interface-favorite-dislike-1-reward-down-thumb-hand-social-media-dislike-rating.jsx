import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnkz51brj.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="jnkz51brj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-favorite-dislike-1-reward-down-thumb-hand-social-media-dislike-rating"} {...others} />);
}

export default Component;
