import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hs3g8e_uk.css';
import '../../css/k/karkvxbcj.css';
import '../../css/n/n6wegsbky.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="hs3g8e_uk"/><path class="karkvxbcj"/><path class="n6wegsbky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:skin-cancer2x-outline"} {...others} />);
}

export default Component;
