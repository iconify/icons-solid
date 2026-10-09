import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-73imbgo.css';
import '../../css/l/lyjggpv8v.css';
import '../../css/t/t-pv2thfp.css';
import '../../css/s/sr07ccc6h.css';
import '../../css/x/xf4bfabrv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e-73imbgo"/><path class="lyjggpv8v"/><path class="t-pv2thfp"/><path class="sr07ccc6h"/><path class="xf4bfabrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:led-20"} {...others} />);
}

export default Component;
