import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m9su60b7m.css';
import '../../css/t/twz7tgb0j.css';
import '../../css/l/lktwn-bjm.css';
import '../../css/r/r5kh_gsbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m9su60b7m"/><path class="twz7tgb0j wm-a"/><path class="lktwn-bjm"/><path class="r5kh_gsbw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-output-duo"} {...others} />);
}

export default Component;
