import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxtgz5blq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oxtgz5blq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:upvote-rss-dark"} {...others} />);
}

export default Component;
