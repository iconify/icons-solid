import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h85rwulue.css';
import '../../css/n/nz90xdize.css';
import '../../css/m/mdlurrbms.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/icskwmlta.css';
import '../../css/m/m3wm2gj9u.css';
import '../../css/h/h-38f_kjt.css';
import '../../css/g/g4bkelbdk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="h85rwulue"/><path class="nz90xdize"/><path class="mdlurrbms"/><g class="jn8qy4bru"><path class="icskwmlta"/><path class="m3wm2gj9u"/><path class="h-38f_kjt"/><path class="g4bkelbdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:water-buffalo"} {...others} />);
}

export default Component;
