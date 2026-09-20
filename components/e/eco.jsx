import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu-3omdxe.css';
import '../../css/q/qjqgoubck.css';
import '../../css/b/bp_58fjhm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cu-3omdxe"/><path class="qjqgoubck"/><path class="bp_58fjhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:eco"} {...others} />);
}

export default Component;
