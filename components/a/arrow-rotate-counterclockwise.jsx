import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kyi3qkb2c.css';
import '../../css/v/vn25--btm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kyi3qkb2c"/><path class="vn25--btm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:arrow-rotate-counterclockwise"} {...others} />);
}

export default Component;
