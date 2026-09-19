import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdy04lnro.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="sdy04lnro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:filter-center-focus"} {...others} />);
}

export default Component;
