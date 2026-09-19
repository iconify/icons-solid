import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1ao6026r.css';
import '../../css/c/cf3z5jfwx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t1ao6026r"/><path class="cf3z5jfwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:battery-charging"} {...others} />);
}

export default Component;
