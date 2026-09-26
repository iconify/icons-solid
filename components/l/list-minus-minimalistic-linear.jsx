import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jv514ss1m.css';
import '../../css/r/r5wb7_bnz.css';
import '../../css/f/f8edcu39k.css';
import '../../css/g/glpogpcqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jv514ss1m"/><path class="r5wb7_bnz"/><path class="f8edcu39k"/><path class="glpogpcqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-minus-minimalistic-linear"} {...others} />);
}

export default Component;
