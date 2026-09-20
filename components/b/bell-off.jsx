import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qxk09zbgn.css';
import '../../css/t/tt7ewmbov.css';
import '../../css/w/w6ht4_aov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qxk09zbgn"/><path class="tt7ewmbov"/><path class="w6ht4_aov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:bell-off"} {...others} />);
}

export default Component;
