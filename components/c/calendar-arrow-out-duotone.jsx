import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b-gd9ibem.css';
import '../../css/r/rnrnfqbcg.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="b-gd9ibem"/><path class="rnrnfqbcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:calendar-arrow-out-duotone"} {...others} />);
}

export default Component;
