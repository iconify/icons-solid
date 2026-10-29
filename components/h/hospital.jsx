import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zbsyr1dde.css';
import '../../css/f/fu-yhsexq.css';
import '../../css/d/d5ox4i4-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zbsyr1dde"/><path class="fu-yhsexq"/><path class="d5ox4i4-t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hospital"} {...others} />);
}

export default Component;
