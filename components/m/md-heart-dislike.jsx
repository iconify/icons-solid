import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b85sq_bgw.css';
import '../../css/f/fzno83ceb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b85sq_bgw"/><path class="fzno83ceb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-heart-dislike"} {...others} />);
}

export default Component;
