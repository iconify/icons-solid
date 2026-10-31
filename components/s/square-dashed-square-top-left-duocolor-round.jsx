import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tom0rnb2s.css';
import '../../css/b/bqycojb_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tom0rnb2s"/><path class="bqycojb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-dashed-square-top-left-duocolor-round"} {...others} />);
}

export default Component;
