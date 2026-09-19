import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i5pi-fbir.css';
import '../../css/j/jvtjbnueh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i5pi-fbir"/><path class="jvtjbnueh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-arrow-diagonal-01"} {...others} />);
}

export default Component;
