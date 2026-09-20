import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/m/mv06jzbvx.css';
import '../../css/i/i2wby7b4z.css';
import '../../css/h/hcp85kb8d.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="mv06jzbvx"/><path class="i2wby7b4z"/><path class="hcp85kb8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:bevy-dark"} {...others} />);
}

export default Component;
