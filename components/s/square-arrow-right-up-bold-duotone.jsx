import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0tkg9bgp.css';
import '../../css/p/pbv_9xbam.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z0tkg9bgp"/><path class="pbv_9xbam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-arrow-right-up-bold-duotone"} {...others} />);
}

export default Component;
