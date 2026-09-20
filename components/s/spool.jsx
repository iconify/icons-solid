import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d3wfcrbur.css';
import '../../css/e/ebkyfnbgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d3wfcrbur"/><path class="ebkyfnbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:spool"} {...others} />);
}

export default Component;
