import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/suve9jbyr.css';
import '../../css/v/vu6xhtzyn.css';
import '../../css/s/sa9op7ect.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="suve9jbyr"/><path class="vu6xhtzyn"/><path class="sa9op7ect"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shield-lock-duotone"} {...others} />);
}

export default Component;
