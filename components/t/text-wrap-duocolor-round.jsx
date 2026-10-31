import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nmvep2rrm.css';
import '../../css/j/jps-wcf_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nmvep2rrm"/><path class="jps-wcf_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-wrap-duocolor-round"} {...others} />);
}

export default Component;
