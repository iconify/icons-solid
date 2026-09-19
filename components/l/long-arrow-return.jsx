import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-dao-bvt.css';

const viewBox = {"width":408,"height":384};
const content = `<path class="g-dao-bvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:long-arrow-return"} {...others} />);
}

export default Component;
