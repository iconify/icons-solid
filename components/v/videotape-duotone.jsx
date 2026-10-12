import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hepm0sakq.css';
import '../../css/x/x4x127bql.css';
import '../../css/l/llhl7bcnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hepm0sakq"/><path class="x4x127bql"/><path class="llhl7bcnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:videotape-duotone"} {...others} />);
}

export default Component;
