import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec0gkmgev.css';
import '../../css/g/gdh-m2hxd.css';
import '../../css/e/evj_wderx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ec0gkmgev"/><path class="gdh-m2hxd"/><path class="evj_wderx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:emptynotepad"} {...others} />);
}

export default Component;
