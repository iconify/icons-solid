import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jyu31wnfy.css';
import '../../css/k/khugd7bfb.css';
import '../../css/w/wbt629b_y.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jyu31wnfy"/><path clip-rule="evenodd" class="khugd7bfb"/><path class="wbt629b_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:calculator-2"} {...others} />);
}

export default Component;
