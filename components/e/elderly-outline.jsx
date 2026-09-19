import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-8tinxxw.css';
import '../../css/q/q6h0bixub.css';
import '../../css/f/faatz_b_h.css';
import '../../css/f/ft3y-bc-t.css';
import '../../css/p/p8faf3jnn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v-8tinxxw"/><path class="q6h0bixub"/><path class="faatz_b_h"/><path clip-rule="evenodd" class="ft3y-bc-t"/><path class="p8faf3jnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:elderly-outline"} {...others} />);
}

export default Component;
