import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/guj5ndblb.css';
import '../../css/f/fd641zcer.css';
import '../../css/d/dqh2e367l.css';
import '../../css/u/ujrmgmblc.css';
import '../../css/o/obcs1cbgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="guj5ndblb"/><path class="fd641zcer"/><path class="dqh2e367l"/><path class="ujrmgmblc"/><path class="obcs1cbgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-3-linear"} {...others} />);
}

export default Component;
