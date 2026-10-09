import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlsrljbwz.css';
import '../../css/c/cbs5z2bem.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rlsrljbwz"/><path class="cbs5z2bem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiation-shield-48"} {...others} />);
}

export default Component;
