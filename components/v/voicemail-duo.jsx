import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j068v3bze.css';
import '../../css/n/nl66y9men.css';
import '../../css/w/wjwwm-bhb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="j068v3bze"/><path class="nl66y9men wm-a"/><path class="wjwwm-bhb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:voicemail-duo"} {...others} />);
}

export default Component;
