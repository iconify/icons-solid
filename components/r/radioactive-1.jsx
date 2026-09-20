import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wvb6anvsf.css';
import '../../css/c/c_giezb0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wvb6anvsf"/><path class="c_giezb0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:radioactive-1"} {...others} />);
}

export default Component;
