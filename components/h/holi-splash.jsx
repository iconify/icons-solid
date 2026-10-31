import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bpyq7fbrw.css';
import '../../css/g/g0hx94knb.css';
import '../../css/a/awe8oqbza.css';
import '../../css/s/sn3f9aciw.css';
import '../../css/o/oct0mfuyr.css';
import '../../css/q/qea38kpib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bpyq7fbrw wm-shadow"/><path class="g0hx94knb"/><path class="awe8oqbza"/><path class="sn3f9aciw"/><path class="oct0mfuyr wm-s"/><path class="qea38kpib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:holi-splash"} {...others} />);
}

export default Component;
