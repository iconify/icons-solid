import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhx1nlb_v.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="mhx1nlb_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:reorder"} {...others} />);
}

export default Component;
