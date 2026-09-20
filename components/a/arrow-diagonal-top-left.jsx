import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm_c2mbqm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wm_c2mbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:arrow-diagonal-top-left"} {...others} />);
}

export default Component;
