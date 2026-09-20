import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d0zwnjrwr.css';
import '../../css/r/rz3t5cc7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d0zwnjrwr"/><path class="rz3t5cc7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rotate-3d"} {...others} />);
}

export default Component;
