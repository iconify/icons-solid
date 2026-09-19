import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh066vywn.css';
import '../../css/c/cobkpuiyr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rh066vywn"/><path clip-rule="evenodd" class="cobkpuiyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:location-solid"} {...others} />);
}

export default Component;
