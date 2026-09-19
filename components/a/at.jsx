import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pmv003mpv.css';
import '../../css/t/t1butsb-t.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="pmv003mpv"/><path class="t1butsb-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:at"} {...others} />);
}

export default Component;
