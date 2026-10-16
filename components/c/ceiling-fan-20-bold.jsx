import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkluasbjw.css';
import '../../css/m/moudosbgx.css';
import '../../css/o/olb-5xpso.css';
import '../../css/f/f-9u6xbiu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rkluasbjw"/><path class="moudosbgx"/><path class="olb-5xpso"/><path class="f-9u6xbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ceiling-fan-20-bold"} {...others} />);
}

export default Component;
