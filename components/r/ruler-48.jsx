import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fggx0lbvr.css';
import '../../css/q/q01m64b9h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fggx0lbvr"/><path class="q01m64b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ruler-48"} {...others} />);
}

export default Component;
