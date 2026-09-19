import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kje9bbc1f.css';
import '../../css/l/l5wvy5nfl.css';
import '../../css/b/b6ckcbcik.css';
import '../../css/l/lh9yiybsb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="kje9bbc1f"/><path clip-rule="evenodd" class="l5wvy5nfl"/><path class="b6ckcbcik"/><path clip-rule="evenodd" class="lh9yiybsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:child-cognition2x-outline"} {...others} />);
}

export default Component;
