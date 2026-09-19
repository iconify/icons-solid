import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbzyvzb3i.css';
import '../../css/j/jtaov8bub.css';
import '../../css/l/lju-rkbzr.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="fbzyvzb3i"/><path class="jtaov8bub"/><path class="lju-rkbzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ws"} {...others} />);
}

export default Component;
