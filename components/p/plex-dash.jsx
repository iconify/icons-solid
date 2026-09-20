import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akqouxm0s.css';
import '../../css/i/iz4-9bcxw.css';
import '../../css/k/kvfbqsbck.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="akqouxm0s"/><path class="iz4-9bcxw"/><path class="kvfbqsbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plex-dash"} {...others} />);
}

export default Component;
