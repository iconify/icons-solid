import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy3_k6b3r.css';
import '../../css/z/z-jza3xhc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vy3_k6b3r"/><path class="z-jza3xhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:screen-smartphone"} {...others} />);
}

export default Component;
