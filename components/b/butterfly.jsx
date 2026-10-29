import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q56y233js.css';
import '../../css/g/gpwovhbpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q56y233js"/><path class="gpwovhbpc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:butterfly"} {...others} />);
}

export default Component;
