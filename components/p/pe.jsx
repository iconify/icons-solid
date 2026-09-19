import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/riureobgl.css';
import '../../css/h/hevie_brf.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="riureobgl"/><path class="hevie_brf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:pe"} {...others} />);
}

export default Component;
