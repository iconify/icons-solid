import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fvm71nh3d.css';
import '../../css/t/tmpf65c9n.css';
import '../../css/c/ckcnl295s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fvm71nh3d"/><path class="tmpf65c9n"/><path class="ckcnl295s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:key-minimalistic-line-duotone"} {...others} />);
}

export default Component;
