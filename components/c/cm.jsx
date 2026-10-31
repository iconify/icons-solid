import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m5x5vhbuo.css';
import '../../css/l/lqs-zacmi.css';
import '../../css/l/lek5l1b7q.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="m5x5vhbuo"/><path class="lqs-zacmi"/><path class="lek5l1b7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cm"} {...others} />);
}

export default Component;
