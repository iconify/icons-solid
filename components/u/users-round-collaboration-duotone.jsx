import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c05_9vbhx.css';
import '../../css/g/gi5g7lm5g.css';
import '../../css/h/hl7ikcc0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c05_9vbhx"/><path class="gi5g7lm5g"/><path class="hl7ikcc0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:users-round-collaboration-duotone"} {...others} />);
}

export default Component;
