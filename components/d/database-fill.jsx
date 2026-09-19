import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qs46ujbkj.css';
import '../../css/j/jqq8m5bxa.css';
import '../../css/w/wswb6dbsr.css';
import '../../css/k/k48ucjmxf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="qs46ujbkj"/><path class="jqq8m5bxa"/><path class="wswb6dbsr"/><path class="k48ucjmxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:database-fill"} {...others} />);
}

export default Component;
