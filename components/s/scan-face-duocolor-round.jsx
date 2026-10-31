import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eo19743sn.css';
import '../../css/l/ly44l6qmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eo19743sn"/><path class="ly44l6qmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:scan-face-duocolor-round"} {...others} />);
}

export default Component;
