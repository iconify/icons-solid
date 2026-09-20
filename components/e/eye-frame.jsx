import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nz26n1b5p.css';
import '../../css/g/g1z6mk3_x.css';
import '../../css/c/cw3fst3sg.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nz26n1b5p"/><path class="g1z6mk3_x"/><path class="cw3fst3sg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:eye-frame"} {...others} />);
}

export default Component;
