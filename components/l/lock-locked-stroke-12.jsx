import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/dry9f179o.css';
import '../../css/h/h_u7y3bpt.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><path class="dry9f179o"/><rect class="h_u7y3bpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:lock-locked-stroke-12"} {...others} />);
}

export default Component;
