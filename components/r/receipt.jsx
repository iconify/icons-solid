import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/n/n4wg8hb7c.css';
import '../../css/i/iuoe8u8la.css';
import '../../css/w/w41tqmb-r.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="n4wg8hb7c"/><path class="iuoe8u8la"/><path class="w41tqmb-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:receipt"} {...others} />);
}

export default Component;
