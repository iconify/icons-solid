import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2k_pab-g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u2k_pab-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:upvote-rss-light"} {...others} />);
}

export default Component;
