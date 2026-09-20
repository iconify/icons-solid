import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g5_mh2foo.css';
import '../../css/u/uxko0ibmv.css';
import '../../css/h/h054lbbok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g5_mh2foo"/><path class="uxko0ibmv"/><path class="h054lbbok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ice-cream-bowl"} {...others} />);
}

export default Component;
