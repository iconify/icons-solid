import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jgktazfdt.css';
import '../../css/j/jvl9yi_dy.css';
import '../../css/r/rkhwyvbrn.css';
import '../../css/i/ikksi9dlb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jgktazfdt"/><path class="jvl9yi_dy"/><path class="rkhwyvbrn"/><path class="ikksi9dlb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:customer-service-02"} {...others} />);
}

export default Component;
