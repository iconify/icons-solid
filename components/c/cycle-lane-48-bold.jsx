import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-hur1b5v.css';
import '../../css/a/aopizzb2e.css';
import '../../css/a/a1qr1ll0u.css';
import '../../css/n/nd-wmcbhn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g-hur1b5v"/><path class="aopizzb2e"/><path class="a1qr1ll0u"/><path class="nd-wmcbhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cycle-lane-48-bold"} {...others} />);
}

export default Component;
