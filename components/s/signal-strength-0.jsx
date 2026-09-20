import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkr1c6dyr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lkr1c6dyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:signal-strength-0"} {...others} />);
}

export default Component;
