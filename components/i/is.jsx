import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kcgjvo2om.css';
import '../../css/i/in06wd4ew.css';
import '../../css/b/be0p64buu.css';

const viewBox = {"width":301,"height":217};
const content = `<g class="ft5dv1b6b"><path class="kcgjvo2om"/><path class="in06wd4ew"/><path class="be0p64buu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:is"} {...others} />);
}

export default Component;
