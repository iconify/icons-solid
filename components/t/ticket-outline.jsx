import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6-tw7fdl.css';
import '../../css/u/u57zsmbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6-tw7fdl"/><path class="u57zsmbkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ticket-outline"} {...others} />);
}

export default Component;
