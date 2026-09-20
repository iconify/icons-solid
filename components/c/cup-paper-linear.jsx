import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c020a4bmu.css';
import '../../css/t/tef83mb6y.css';
import '../../css/t/tk6t9fbyh.css';
import '../../css/j/jxdwkm1he.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c020a4bmu"/><path class="tef83mb6y"/><path class="tk6t9fbyh"/><path class="jxdwkm1he"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-paper-linear"} {...others} />);
}

export default Component;
