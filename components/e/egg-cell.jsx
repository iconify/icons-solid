import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhrzp3m4f.css';
import '../../css/n/nakj5ubjo.css';
import '../../css/y/yriqevbyr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="vhrzp3m4f"/><path clip-rule="evenodd" class="nakj5ubjo"/><path clip-rule="evenodd" class="yriqevbyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:egg-cell"} {...others} />);
}

export default Component;
