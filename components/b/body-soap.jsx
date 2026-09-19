import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qf26nbclk.css';
import '../../css/o/ojxizkvjf.css';
import '../../css/g/gr2myqbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qf26nbclk"/><path class="ojxizkvjf"/><path class="gr2myqbwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:body-soap"} {...others} />);
}

export default Component;
