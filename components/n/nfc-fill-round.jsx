import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn6cj0vlc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hn6cj0vlc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:nfc-fill-round"} {...others} />);
}

export default Component;
