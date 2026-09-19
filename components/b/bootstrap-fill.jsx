import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xved4f9hb.css';
import '../../css/f/f2afytbsi.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="xved4f9hb"/><path class="f2afytbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:bootstrap-fill"} {...others} />);
}

export default Component;
