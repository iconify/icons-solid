import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wo48hl-_h.css';
import '../../css/y/ya1metbqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wo48hl-_h"/><path class="ya1metbqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-line-duotone"} {...others} />);
}

export default Component;
