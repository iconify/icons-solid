import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/if_fr7tub.css';
import '../../css/k/kcc_36bdy.css';
import '../../css/k/ke6fezb3o.css';
import '../../css/r/rzbp2-b8z.css';
import '../../css/f/f46f54b3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="if_fr7tub"/><path class="kcc_36bdy"/><path class="ke6fezb3o"/><path class="rzbp2-b8z"/><path class="f46f54b3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:scatter-chart"} {...others} />);
}

export default Component;
