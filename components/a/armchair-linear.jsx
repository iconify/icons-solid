import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dh-362btw.css';
import '../../css/c/c2ccr1cfe.css';
import '../../css/h/hvt2a6e9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dh-362btw"/><path class="c2ccr1cfe"/><path class="hvt2a6e9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:armchair-linear"} {...others} />);
}

export default Component;
