import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er2fz3ono.css';
import '../../css/l/lwb5t-h6o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="er2fz3ono"/><path class="lwb5t-h6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:earth-outline"} {...others} />);
}

export default Component;
