import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/koh4mu49t.css';
import '../../css/h/hbi8hhkfx.css';
import '../../css/o/oqf382uiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="koh4mu49t"/><path class="hbi8hhkfx wm-a"/><path class="oqf382uiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:eye-duo"} {...others} />);
}

export default Component;
