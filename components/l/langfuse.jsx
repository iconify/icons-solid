import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swgykjbfw.css';
import '../../css/z/z_9dnnd4s.css';
import '../../css/f/fc28b1b8r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="swgykjbfw"/><path class="z_9dnnd4s"/><path class="fc28b1b8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:langfuse"} {...others} />);
}

export default Component;
