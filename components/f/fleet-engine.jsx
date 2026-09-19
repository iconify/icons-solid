import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6mstu8gp.css';
import '../../css/t/tqozfyn3j.css';
import '../../css/q/qtnk1jbio.css';
import '../../css/m/mwlrzeqkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="s6mstu8gp"><path class="tqozfyn3j"/><path class="qtnk1jbio"/><path class="mwlrzeqkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:fleet-engine"} {...others} />);
}

export default Component;
