import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqjo_17sw.css';
import '../../css/f/fv344tbkt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bqjo_17sw"/><path class="fv344tbkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:micro-inverter-20-bold"} {...others} />);
}

export default Component;
