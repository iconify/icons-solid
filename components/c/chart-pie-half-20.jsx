import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1q-oibwe.css';
import '../../css/c/cp_m0ih6c.css';
import '../../css/q/qzsda2yxj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g1q-oibwe"/><path class="cp_m0ih6c"/><path class="qzsda2yxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-pie-half-20"} {...others} />);
}

export default Component;
