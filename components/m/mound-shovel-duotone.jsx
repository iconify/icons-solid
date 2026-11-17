import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m2ti0vg3b.css';
import '../../css/o/ohspjicop.css';
import '../../css/b/b9v1544fi.css';
import '../../css/k/k9k_yyryx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m2ti0vg3b"/><path class="ohspjicop"/><path class="b9v1544fi"/><path class="k9k_yyryx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mound-shovel-duotone"} {...others} />);
}

export default Component;
