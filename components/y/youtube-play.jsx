import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd7ebx84s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pd7ebx84s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:youtube-play"} {...others} />);
}

export default Component;
