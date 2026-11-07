import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mm0yq-b-x.css';
import '../../css/r/ryndaxq8c.css';
import '../../css/i/irudeebhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mm0yq-b-x"/><path class="ryndaxq8c"/><path class="irudeebhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:speaker-minimalistic-line-duotone"} {...others} />);
}

export default Component;
