import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ay7sktbrs.css';
import '../../css/c/cgmxj0bpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ay7sktbrs"/><path class="cgmxj0bpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hammer"} {...others} />);
}

export default Component;
