import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9e-ti8lb.css';
import '../../css/l/lr8d33b7p.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="f9e-ti8lb"/><circle class="lr8d33b7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bd"} {...others} />);
}

export default Component;
