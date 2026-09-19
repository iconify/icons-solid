import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1dbcvb1r.css';
import '../../css/y/yiwa8gb3t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x1dbcvb1r"/><path class="yiwa8gb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:shapes-outline"} {...others} />);
}

export default Component;
