import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5c-sgb4d.css';

const viewBox = {"width":472,"height":456};
const content = `<path class="m5c-sgb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:collection-case-play"} {...others} />);
}

export default Component;
