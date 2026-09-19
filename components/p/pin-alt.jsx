import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m7bgq0r8p.css';
import '../../css/p/p7_ui2bab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m7bgq0r8p"/><path class="p7_ui2bab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pin-alt"} {...others} />);
}

export default Component;
