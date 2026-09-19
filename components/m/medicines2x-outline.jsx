import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1rx-ivkk.css';
import '../../css/e/ekv93tbmp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="f1rx-ivkk"/><path clip-rule="evenodd" class="ekv93tbmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:medicines2x-outline"} {...others} />);
}

export default Component;
