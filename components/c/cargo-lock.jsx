import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q_hr1s_on.css';
import '../../css/w/w_e3nlbsq.css';
import '../../css/l/lhaxnqbla.css';
import '../../css/k/kbpjvngat.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="bi12bsetm"><path class="q_hr1s_on"/><path class="w_e3nlbsq"/><path class="lhaxnqbla"/><path class="kbpjvngat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:cargo-lock"} {...others} />);
}

export default Component;
