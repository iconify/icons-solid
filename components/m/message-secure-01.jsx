import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g_dr3hbhk.css';
import '../../css/h/h5_dokc-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g_dr3hbhk"/><path class="h5_dokc-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-secure-01"} {...others} />);
}

export default Component;
