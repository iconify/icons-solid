import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8rbiiblu.css';
import '../../css/w/w_gkkwbts.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b8rbiiblu"/><path class="w_gkkwbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sshwifty-light"} {...others} />);
}

export default Component;
