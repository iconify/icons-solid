import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/won3e36nd.css';
import '../../css/n/nm6ycbbue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="won3e36nd"/><path class="nm6ycbbue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:armchair-duocolor-round"} {...others} />);
}

export default Component;
