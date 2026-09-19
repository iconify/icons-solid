import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/td4tty4ni.css';
import '../../css/v/vp97hcpog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="td4tty4ni"/><path class="vp97hcpog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:car-outline"} {...others} />);
}

export default Component;
