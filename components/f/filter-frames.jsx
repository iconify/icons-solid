import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af4hf3w3d.css';

const viewBox = {"width":432,"height":472};
const content = `<path class="af4hf3w3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:filter-frames"} {...others} />);
}

export default Component;
