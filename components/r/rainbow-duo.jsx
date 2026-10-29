import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fvwflou2k.css';
import '../../css/w/wk7jmzmpf.css';
import '../../css/y/ydpucsi6v.css';
import '../../css/k/kgm9zh0zc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fvwflou2k"/><path class="wk7jmzmpf wm-a"/><path class="ydpucsi6v"/><path class="kgm9zh0zc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rainbow-duo"} {...others} />);
}

export default Component;
