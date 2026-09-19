import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t08lfbbqm.css';
import '../../css/f/fttg634dd.css';
import '../../css/g/g6jaddcnb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="t08lfbbqm"/><path class="fttg634dd"/><path class="g6jaddcnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:virus-sanitizer-spray"} {...others} />);
}

export default Component;
