import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p1evxrbfr.css';
import '../../css/e/e0y42mbja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p1evxrbfr"/><path class="e0y42mbja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:webcam-duocolor-round"} {...others} />);
}

export default Component;
