import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj1ucjb-u.css';
import '../../css/i/ixx-con_e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tj1ucjb-u"/><path class="ixx-con_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:network-public"} {...others} />);
}

export default Component;
