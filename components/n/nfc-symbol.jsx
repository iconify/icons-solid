import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3t0tdi0f.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="c3t0tdi0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:nfc-symbol"} {...others} />);
}

export default Component;
