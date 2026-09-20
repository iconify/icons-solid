import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/g/gwtb9fb5e.css';
import '../../css/p/p3a3-wxlk.css';
import '../../css/p/p9ekrnbem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="gwtb9fb5e"/><path class="p3a3-wxlk"/><path class="p9ekrnbem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dollar-minimalistic-linear"} {...others} />);
}

export default Component;
