import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhm0ndz3m.css';
import '../../css/v/vw4ng7gqm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yhm0ndz3m"/><path class="vw4ng7gqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:chevron-double-down"} {...others} />);
}

export default Component;
