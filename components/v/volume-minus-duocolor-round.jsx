import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h4f42dbzz.css';
import '../../css/i/ihhy5kb9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h4f42dbzz"/><path class="ihhy5kb9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:volume-minus-duocolor-round"} {...others} />);
}

export default Component;
