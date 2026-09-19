import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_7918rpi.css';
import '../../css/s/sssc3sb_u.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="d_7918rpi"/><path class="sssc3sb_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:clouds-fill"} {...others} />);
}

export default Component;
