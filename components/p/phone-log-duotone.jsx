import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fw4kgw1nz.css';
import '../../css/s/sd8hp-bgw.css';
import '../../css/i/idx-jsb0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fw4kgw1nz"/><path class="sd8hp-bgw"/><path class="idx-jsb0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:phone-log-duotone"} {...others} />);
}

export default Component;
