import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qodv1-buf.css';
import '../../css/u/u4b819bdl.css';
import '../../css/b/bw3e3bcaj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qodv1-buf"/><path class="u4b819bdl"/><path class="bw3e3bcaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sushi-03"} {...others} />);
}

export default Component;
