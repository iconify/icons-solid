import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nx-h-hbdi.css';
import '../../css/j/jt3syef6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nx-h-hbdi"/><path class="jt3syef6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:globe-off"} {...others} />);
}

export default Component;
