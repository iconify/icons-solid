import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4f-2496w.css';
import '../../css/g/g655h3mfp.css';
import '../../css/l/lhsdum_sg.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="p4f-2496w"/><path class="g655h3mfp"/><path class="lhsdum_sg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cm"} {...others} />);
}

export default Component;
