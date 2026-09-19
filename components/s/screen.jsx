import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5kweu8nd.css';
import '../../css/y/yj9yfrb2m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k5kweu8nd"/><path class="yj9yfrb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:screen"} {...others} />);
}

export default Component;
