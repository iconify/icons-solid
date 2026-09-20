import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd_610ovi.css';
import '../../css/r/r0k4s_6cx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qd_610ovi"/><path class="r0k4s_6cx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hhf-technology"} {...others} />);
}

export default Component;
