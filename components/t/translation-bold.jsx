import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bfczqwbld.css';
import '../../css/b/bpv8bfbck.css';
import '../../css/s/sgvjp04ko.css';
import '../../css/s/swpqpacuo.css';
import '../../css/r/rwn4wowra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bfczqwbld"/><path class="bpv8bfbck"/><path class="sgvjp04ko"/><path class="swpqpacuo"/><path class="rwn4wowra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:translation-bold"} {...others} />);
}

export default Component;
