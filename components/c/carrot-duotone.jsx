import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvwq_m6gc.css';
import '../../css/k/ke864sb5l.css';
import '../../css/i/iloskbbyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yvwq_m6gc"/><path class="ke864sb5l"/><path class="iloskbbyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:carrot-duotone"} {...others} />);
}

export default Component;
