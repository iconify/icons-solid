import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iphozxige.css';
import '../../css/a/a68azobdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iphozxige"/><path class="a68azobdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sparkles-duocolor-round"} {...others} />);
}

export default Component;
