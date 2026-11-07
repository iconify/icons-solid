import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us-5s8w3u.css';
import '../../css/d/du6sep0xm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="us-5s8w3u"/><path clip-rule="evenodd" class="du6sep0xm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:copyright-outline"} {...others} />);
}

export default Component;
