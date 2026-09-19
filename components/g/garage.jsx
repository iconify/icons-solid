import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p1pnmsopg.css';
import '../../css/k/k8m56etkf.css';
import '../../css/h/hfw6dysas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p1pnmsopg"/><path class="k8m56etkf"/><path class="hfw6dysas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:garage"} {...others} />);
}

export default Component;
