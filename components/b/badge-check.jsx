import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4z4z2_dv.css';

const viewBox = {"width":384,"height":480};
const content = `<path class="y4z4z2_dv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:badge-check"} {...others} />);
}

export default Component;
