import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mhllb-_9i.css';
import '../../css/j/jr8_gf32b.css';
import '../../css/b/bm6qz-e6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mhllb-_9i"/><path class="jr8_gf32b"/><path class="bm6qz-e6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:align-horizontal-justify-center-duotone"} {...others} />);
}

export default Component;
