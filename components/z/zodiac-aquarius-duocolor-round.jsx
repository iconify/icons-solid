import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rst98qbxf.css';
import '../../css/u/ut8kv4wom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rst98qbxf"/><path class="ut8kv4wom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zodiac-aquarius-duocolor-round"} {...others} />);
}

export default Component;
