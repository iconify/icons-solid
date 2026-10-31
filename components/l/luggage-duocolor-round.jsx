import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e53frpbez.css';
import '../../css/u/urlkpdmag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e53frpbez"/><path class="urlkpdmag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:luggage-duocolor-round"} {...others} />);
}

export default Component;
