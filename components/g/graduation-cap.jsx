import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q1n9usb8s.css';
import '../../css/n/nark22gnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q1n9usb8s"/><path class="nark22gnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:graduation-cap"} {...others} />);
}

export default Component;
