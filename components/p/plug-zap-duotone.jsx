import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tnbdi8n3b.css';
import '../../css/i/i6u14jbud.css';
import '../../css/s/s8riu9c1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tnbdi8n3b"/><path class="i6u14jbud"/><path class="s8riu9c1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:plug-zap-duotone"} {...others} />);
}

export default Component;
