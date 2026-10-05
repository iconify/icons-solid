import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gxnuqt2lr.css';
import '../../css/s/syv48hbha.css';
import '../../css/o/ow1kvlbyk.css';
import '../../css/x/xk5yrwbww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="gxnuqt2lr"/><path class="syv48hbha"/><path class="ow1kvlbyk"/><path class="xk5yrwbww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:circle-help"} {...others} />);
}

export default Component;
