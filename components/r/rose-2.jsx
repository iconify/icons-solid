import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ixzignlxj.css';
import '../../css/l/lgx28dbym.css';
import '../../css/q/qqh5rlb8m.css';
import '../../css/k/kyagrc69y.css';
import '../../css/p/p16gfqbyd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ixzignlxj"/><path class="lgx28dbym"/><path class="qqh5rlb8m"/><path class="kyagrc69y"/><path class="p16gfqbyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:rose-2"} {...others} />);
}

export default Component;
