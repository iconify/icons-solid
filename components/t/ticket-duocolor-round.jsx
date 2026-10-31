import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b5_asfvzt.css';
import '../../css/i/i-1rx4jhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b5_asfvzt"/><path class="i-1rx4jhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ticket-duocolor-round"} {...others} />);
}

export default Component;
