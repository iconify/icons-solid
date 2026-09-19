import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2nvqgbuj.css';
import '../../css/x/xadjgxb-b.css';
import '../../css/c/cni6_d2wb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i2nvqgbuj"/><path class="xadjgxb-b"/><path class="cni6_d2wb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:wifi-sharp"} {...others} />);
}

export default Component;
