import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzeqlybma.css';
import '../../css/g/gtkyb1bks.css';
import '../../css/j/ji63kub0k.css';
import '../../css/l/liu7h9msv.css';

const viewBox = {"width":301,"height":177};
const content = `<g class="ft5dv1b6b"><path class="mzeqlybma"/><path class="gtkyb1bks"/><path class="ji63kub0k"/><path class="liu7h9msv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cv"} {...others} />);
}

export default Component;
