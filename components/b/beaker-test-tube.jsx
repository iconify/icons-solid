import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-ewrfbux.css';
import '../../css/i/ijl4o_bbm.css';
import '../../css/i/iw8bw5b-n.css';
import '../../css/j/jl8lropqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l-ewrfbux"/><path class="ijl4o_bbm"/><path class="iw8bw5b-n"/><path class="jl8lropqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:beaker-test-tube"} {...others} />);
}

export default Component;
