import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/jr8sz2b3f.css';
import '../../css/m/mfbnmqh5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="jr8sz2b3f"/><path class="mfbnmqh5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:wave-hexagon"} {...others} />);
}

export default Component;
