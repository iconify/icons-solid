import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpcv03ats.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="qpcv03ats"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:flip-to-front"} {...others} />);
}

export default Component;
