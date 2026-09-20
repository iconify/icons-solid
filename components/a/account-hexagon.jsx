import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/mfbnmqh5k.css';
import '../../css/j/j-bt0mbso.css';
import '../../css/j/jsk74rbvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="mfbnmqh5k"/><path class="j-bt0mbso"/><path class="jsk74rbvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:account-hexagon"} {...others} />);
}

export default Component;
