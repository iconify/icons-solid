import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dk_c-sb7y.css';
import '../../css/h/hzbldnbux.css';
import '../../css/v/vjpnyegoq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="dk_c-sb7y"/><path class="hzbldnbux wm-a"/><path class="vjpnyegoq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:poinsettia"} {...others} />);
}

export default Component;
