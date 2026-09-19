import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6dcbeqzs.css';
import '../../css/q/q0flt88vy.css';
import '../../css/q/qtv77fehd.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="q6dcbeqzs"/><path class="q0flt88vy"/><path class="qtv77fehd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:rocket"} {...others} />);
}

export default Component;
