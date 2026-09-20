import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zz487oylf.css';
import '../../css/r/rr9cw5qun.css';
import '../../css/h/hna9ewztx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zz487oylf"/><path class="rr9cw5qun"/><path class="hna9ewztx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-double-alt-arrow-right-bold-duotone"} {...others} />);
}

export default Component;
