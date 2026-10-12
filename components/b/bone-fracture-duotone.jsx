import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/la34zmbqe.css';
import '../../css/h/h1fus37ga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="la34zmbqe"/><path class="h1fus37ga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bone-fracture-duotone"} {...others} />);
}

export default Component;
