import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k7b4fo5xh.css';
import '../../css/y/ya4v2ogmm.css';
import '../../css/h/hzret1bgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><ellipse class="k7b4fo5xh"/><path class="ya4v2ogmm"/><path class="hzret1bgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:golf-linear"} {...others} />);
}

export default Component;
