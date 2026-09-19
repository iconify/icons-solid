import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/przbox5lp.css';
import '../../css/h/hevie_brf.css';
import '../../css/g/gq2r8vb4m.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="przbox5lp"/><path class="hevie_brf"/><path class="gq2r8vb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:it"} {...others} />);
}

export default Component;
