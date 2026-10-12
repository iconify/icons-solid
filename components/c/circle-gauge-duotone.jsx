import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/omx8w3bfa.css';
import '../../css/n/nzmariesu.css';
import '../../css/n/nbqssjb9c.css';
import '../../css/z/zyxdf9wen.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="omx8w3bfa"/><path class="nzmariesu"/><path class="nbqssjb9c"/><path class="zyxdf9wen"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-gauge-duotone"} {...others} />);
}

export default Component;
