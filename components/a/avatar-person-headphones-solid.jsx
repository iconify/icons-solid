import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yyu_9sbck.css';
import '../../css/o/oaslkabew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="yyu_9sbck"/><path class="oaslkabew wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-person-headphones-solid"} {...others} />);
}

export default Component;
