import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dcerkhb-h.css';
import '../../css/o/oe17a_jel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dcerkhb-h"/><path class="oe17a_jel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hand"} {...others} />);
}

export default Component;
