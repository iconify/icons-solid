import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g8gy9vy8e.css';
import '../../css/w/w6otkg_un.css';
import '../../css/w/w2fbwab-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="g8gy9vy8e"/><path class="w6otkg_un"/><path class="w2fbwab-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bonfire"} {...others} />);
}

export default Component;
