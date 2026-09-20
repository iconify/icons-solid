import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/em57_pb1b.css';
import '../../css/q/q9cy_jv2z.css';
import '../../css/b/b0rut8bma.css';
import '../../css/p/p3twxs94c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="em57_pb1b"/><circle class="q9cy_jv2z"/><circle class="b0rut8bma"/><circle class="p3twxs94c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bubbles"} {...others} />);
}

export default Component;
