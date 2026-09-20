import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pv2k4acyc.css';
import '../../css/s/scv0kn1jn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pv2k4acyc"/><path class="scv0kn1jn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:candle-holder-lit"} {...others} />);
}

export default Component;
