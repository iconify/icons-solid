import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in1dviszv.css';
import '../../css/w/wlhdm6bvr.css';
import '../../css/q/q3sm69b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="in1dviszv"><path class="wlhdm6bvr"/><path class="q3sm69b2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:unlock-alt-duotone"} {...others} />);
}

export default Component;
