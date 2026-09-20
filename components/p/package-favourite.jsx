import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/r/rl_llccjx.css';
import '../../css/p/pqa2nbb_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="rl_llccjx"/><path class="pqa2nbb_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:package-favourite"} {...others} />);
}

export default Component;
