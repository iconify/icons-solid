import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fo5gddyxp.css';
import '../../css/n/nyv5_pnax.css';
import '../../css/i/il-hj08zf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fo5gddyxp"/><path class="nyv5_pnax"/><path class="il-hj08zf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:wallet-duotone"} {...others} />);
}

export default Component;
