import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcq9v-bih.css';
import '../../css/d/d-wa8wj9d.css';
import '../../css/z/zvnq9o5sc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wcq9v-bih"/><path class="d-wa8wj9d"/><path class="zvnq9o5sc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:camera-off-bold-duotone"} {...others} />);
}

export default Component;
