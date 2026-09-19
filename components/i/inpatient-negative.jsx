import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yh2wexlbk.css';
import '../../css/s/s1uuiv77j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="yh2wexlbk"/><path clip-rule="evenodd" class="s1uuiv77j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:inpatient-negative"} {...others} />);
}

export default Component;
