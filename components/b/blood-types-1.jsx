import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fi9fwoivw.css';
import '../../css/w/wwvzzybpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fi9fwoivw"/><path class="wwvzzybpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:blood-types-1"} {...others} />);
}

export default Component;
