import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr0py_b6k.css';
import '../../css/x/xuyp_ezqr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zr0py_b6k"/><path class="xuyp_ezqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-mask-48-bold"} {...others} />);
}

export default Component;
