import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qakt9_bfe.css';
import '../../css/r/ra990dx0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qakt9_bfe"/><path class="ra990dx0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:trash-duocolor-round"} {...others} />);
}

export default Component;
