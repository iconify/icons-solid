import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vez_7om7o.css';
import '../../css/c/cw8ojcn9m.css';
import '../../css/c/cp3a_0dpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vez_7om7o"/><path class="cw8ojcn9m"/><path class="cp3a_0dpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hard-drive-duotone"} {...others} />);
}

export default Component;
