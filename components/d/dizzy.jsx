import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-npdpb0r.css';
import '../../css/z/zt-kp8jtf.css';
import '../../css/k/klyk2tbno.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="j-npdpb0r"><path class="zt-kp8jtf"/><path class="klyk2tbno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"xero-emoji:dizzy"} {...others} />);
}

export default Component;
