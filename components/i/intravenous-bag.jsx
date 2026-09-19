import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uvcmmrj_g.css';
import '../../css/q/q9ergjblw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="uvcmmrj_g"/><path clip-rule="evenodd" class="q9ergjblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:intravenous-bag"} {...others} />);
}

export default Component;
