import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_b-4qdzj.css';
import '../../css/q/qn_f8924d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="u_b-4qdzj"/><path class="qn_f8924d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:breast-cancer-outline"} {...others} />);
}

export default Component;
