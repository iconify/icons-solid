import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/spqcbsbpc.css';
import '../../css/g/g7qhlkmuq.css';
import '../../css/q/qacc8-bma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="spqcbsbpc"/><path class="g7qhlkmuq"/><path class="qacc8-bma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cash"} {...others} />);
}

export default Component;
