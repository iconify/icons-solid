import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1_i3l3vn.css';
import '../../css/m/m5lp6jbuo.css';

const viewBox = {"width":500,"height":500};
const content = `<path class="g1_i3l3vn"/><path class="m5lp6jbuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-watchdog-light"} {...others} />);
}

export default Component;
