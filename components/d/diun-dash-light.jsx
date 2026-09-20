import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6_n2_bxr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w6_n2_bxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:diun-dash-light"} {...others} />);
}

export default Component;
