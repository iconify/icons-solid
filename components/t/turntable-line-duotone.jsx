import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iaha13btl.css';
import '../../css/z/zhaqmra8c.css';
import '../../css/b/bi65t-brz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="iaha13btl"/><path class="zhaqmra8c"/><path class="bi65t-brz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-line-duotone"} {...others} />);
}

export default Component;
