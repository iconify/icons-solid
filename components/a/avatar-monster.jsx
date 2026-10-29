import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ewb4c0zlw.css';
import '../../css/p/pht4mnbru.css';
import '../../css/p/pfp6hfb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ewb4c0zlw"/><path class="pht4mnbru wm-a"/><path class="pfp6hfb3z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-monster"} {...others} />);
}

export default Component;
