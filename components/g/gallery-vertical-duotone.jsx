import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oh14ly7za.css';
import '../../css/v/vt87t1j6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oh14ly7za"/><path class="vt87t1j6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gallery-vertical-duotone"} {...others} />);
}

export default Component;
