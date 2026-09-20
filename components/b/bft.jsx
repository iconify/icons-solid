import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voxoyd1yc.css';
import '../../css/y/ys14dvbif.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="voxoyd1yc"/><path clip-rule="evenodd" class="ys14dvbif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bft"} {...others} />);
}

export default Component;
