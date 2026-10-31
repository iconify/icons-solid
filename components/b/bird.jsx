import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/epl9gvs4m.css';
import '../../css/q/q7vib97in.css';
import '../../css/h/hfz7gx23v.css';
import '../../css/o/orwqd-bab.css';
import '../../css/h/hkbka9biu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="epl9gvs4m wm-shadow"/><path class="q7vib97in"/><path class="hfz7gx23v"/><path class="orwqd-bab"/><path class="hkbka9biu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bird"} {...others} />);
}

export default Component;
