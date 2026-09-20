import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uwialcivp.css';
import '../../css/w/wf5wyrz5c.css';
import '../../css/w/w6vt9xnjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="uwialcivp"/><path class="wf5wyrz5c"/><path class="w6vt9xnjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:signal-low-sharp-two-tone"} {...others} />);
}

export default Component;
