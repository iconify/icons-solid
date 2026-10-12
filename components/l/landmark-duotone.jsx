import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnkdaj0ty.css';
import '../../css/s/s25lxsbvo.css';
import '../../css/n/n9nithbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pnkdaj0ty"/><path class="s25lxsbvo"/><path class="n9nithbvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:landmark-duotone"} {...others} />);
}

export default Component;
