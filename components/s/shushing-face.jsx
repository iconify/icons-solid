import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/btmf4qbac.css';
import '../../css/g/g1jm2-u3o.css';
import '../../css/q/qe_omjbhd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="btmf4qbac"/><path class="g1jm2-u3o"/><path class="qe_omjbhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:shushing-face"} {...others} />);
}

export default Component;
