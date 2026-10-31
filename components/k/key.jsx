import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qqa-xrd9y.css';
import '../../css/a/a8xhfiina.css';
import '../../css/f/fozklcblg.css';
import '../../css/p/pbyhetbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qqa-xrd9y wm-shadow"/><path class="a8xhfiina"/><path class="fozklcblg"/><path class="pbyhetbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:key"} {...others} />);
}

export default Component;
