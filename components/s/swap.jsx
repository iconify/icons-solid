import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/louzr2q0b.css';
import '../../css/w/wox8e5-la.css';
import '../../css/i/iqev0abij.css';
import '../../css/n/nl8tjs5bg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="louzr2q0b"/><path class="wm-a wox8e5-la"/><path class="iqev0abij"/><path class="nl8tjs5bg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:swap"} {...others} />);
}

export default Component;
