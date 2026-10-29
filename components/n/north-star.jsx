import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t3ksqlbsm.css';
import '../../css/x/xa2al6jsz.css';
import '../../css/j/jqjffrbpv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t3ksqlbsm"/><path class="xa2al6jsz"/><path class="jqjffrbpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:north-star"} {...others} />);
}

export default Component;
