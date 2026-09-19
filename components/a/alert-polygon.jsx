import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt3_vab_u.css';

const viewBox = {"width":472,"height":448};
const content = `<path class="kt3_vab_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:alert-polygon"} {...others} />);
}

export default Component;
