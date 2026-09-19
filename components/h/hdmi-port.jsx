import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tsj65-z-p.css';
import '../../css/m/mzisylboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tsj65-z-p"/><path class="mzisylboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hdmi-port"} {...others} />);
}

export default Component;
