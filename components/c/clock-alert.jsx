import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hmp16njeg.css';
import '../../css/f/f78e21b0t.css';
import '../../css/j/j3l-vfqkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="hmp16njeg"/><path class="f78e21b0t wm-a"/><path class="j3l-vfqkm wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clock-alert"} {...others} />);
}

export default Component;
