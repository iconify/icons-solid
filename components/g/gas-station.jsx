import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_a8v-fgx.css';

const viewBox = {"width":352,"height":384};
const content = `<path class="h_a8v-fgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:gas-station"} {...others} />);
}

export default Component;
