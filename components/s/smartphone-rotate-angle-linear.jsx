import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kzjab8bcu.css';
import '../../css/s/src5g-5zv.css';
import '../../css/a/ac1l4pbcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kzjab8bcu"/><path class="src5g-5zv"/><path class="ac1l4pbcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-angle-linear"} {...others} />);
}

export default Component;
