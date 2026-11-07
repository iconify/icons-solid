import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/omvizacjo.css';
import '../../css/k/k6knkcfzc.css';
import '../../css/c/c-9ps4isn.css';
import '../../css/t/tangbccak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="omvizacjo"/><path class="k6knkcfzc"/><path class="c-9ps4isn"/><path class="tangbccak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rocket-broken"} {...others} />);
}

export default Component;
