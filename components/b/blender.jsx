import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df7_hrbzw.css';
import '../../css/k/koq23907p.css';
import '../../css/n/nv9civq7j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="df7_hrbzw"/><path class="koq23907p"/><path class="nv9civq7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:blender"} {...others} />);
}

export default Component;
