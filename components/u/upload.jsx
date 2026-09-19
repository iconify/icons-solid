import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j13g7rb-h.css';
import '../../css/s/s2c-xnbgp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="j13g7rb-h"/><path class="s2c-xnbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:upload"} {...others} />);
}

export default Component;
