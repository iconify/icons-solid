import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/aozp2s1mk.css';
import '../../css/e/ewbtvpc_j.css';
import '../../css/w/w9p-5cc-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="aozp2s1mk"/><path class="ewbtvpc_j wm-a"/><path class="w9p-5cc-x wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lion-head"} {...others} />);
}

export default Component;
