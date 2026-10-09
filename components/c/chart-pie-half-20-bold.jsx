import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k849iebqp.css';
import '../../css/c/cham1t_la.css';
import '../../css/e/ey5fq-bns.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k849iebqp"/><path class="cham1t_la"/><path class="ey5fq-bns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-pie-half-20-bold"} {...others} />);
}

export default Component;
