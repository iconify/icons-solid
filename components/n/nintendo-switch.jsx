import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/int3fte0q.css';
import '../../css/q/qfnoy_0pk.css';
import '../../css/z/zm3nmuiva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="int3fte0q"/><path class="qfnoy_0pk"/><path class="zm3nmuiva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:nintendo-switch"} {...others} />);
}

export default Component;
