import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lagwj0bdl.css';
import '../../css/e/er6snfb-s.css';
import '../../css/o/o5g176b6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lagwj0bdl"/><path class="er6snfb-s"/><path class="o5g176b6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ice-cream-cone-duotone"} {...others} />);
}

export default Component;
