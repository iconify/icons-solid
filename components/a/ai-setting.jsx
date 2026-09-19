import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kc-lfrb0i.css';
import '../../css/f/fz9vu96sc.css';
import '../../css/w/way4u1f4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kc-lfrb0i"/><path class="fz9vu96sc"/><path class="way4u1f4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-setting"} {...others} />);
}

export default Component;
