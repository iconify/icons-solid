import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vagj0u3jv.css';
import '../../css/l/l5y5ijc_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vagj0u3jv"/><path class="l5y5ijc_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:headset"} {...others} />);
}

export default Component;
