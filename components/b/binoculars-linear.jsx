import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x6v2ivbfo.css';
import '../../css/w/wwmhxmb7s.css';
import '../../css/h/hf2jg-64g.css';
import '../../css/q/ql78khb5l.css';
import '../../css/p/p_ni59b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x6v2ivbfo"/><path class="wwmhxmb7s"/><path class="hf2jg-64g"/><path class="ql78khb5l"/><path class="p_ni59b0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:binoculars-linear"} {...others} />);
}

export default Component;
