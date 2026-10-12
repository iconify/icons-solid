import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttwdabbfw.css';
import '../../css/e/edh-75b4r.css';
import '../../css/k/k9x2rd0gm.css';
import '../../css/y/yb7c09b3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ttwdabbfw"/><path class="edh-75b4r"/><path class="k9x2rd0gm"/><path class="yb7c09b3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:truck-electric-duotone"} {...others} />);
}

export default Component;
