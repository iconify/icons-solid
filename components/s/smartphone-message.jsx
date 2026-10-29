import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/ch4j9abio.css';
import '../../css/p/pm96j7xxh.css';
import '../../css/w/wiker-buu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ch4j9abio"/><path class="pm96j7xxh wm-a"/><path class="wiker-buu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:smartphone-message"} {...others} />);
}

export default Component;
