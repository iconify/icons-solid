import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fc11r4www.css';
import '../../css/l/lbglbdcav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fc11r4www"/><path class="lbglbdcav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:watch-square-disable"} {...others} />);
}

export default Component;
