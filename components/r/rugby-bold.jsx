import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-mei2b6d.css';
import '../../css/n/nudj6ubep.css';
import '../../css/g/gl_0n93vk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-mei2b6d"/><path class="nudj6ubep"/><path clip-rule="evenodd" class="gl_0n93vk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rugby-bold"} {...others} />);
}

export default Component;
