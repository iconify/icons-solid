import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrt0s6edx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zrt0s6edx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ticc-dash-light"} {...others} />);
}

export default Component;
