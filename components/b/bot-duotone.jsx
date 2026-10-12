import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u352vjp6z.css';
import '../../css/p/p_e-hdc_r.css';
import '../../css/r/r099n9bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u352vjp6z"/><path class="p_e-hdc_r"/><path class="r099n9bbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bot-duotone"} {...others} />);
}

export default Component;
