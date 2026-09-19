import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/up41n5_fe.css';
import '../../css/y/yb5y__l1h.css';
import '../../css/x/x8dhmccog.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="up41n5_fe"/><path class="yb5y__l1h"/><path class="x8dhmccog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-electron-outline"} {...others} />);
}

export default Component;
