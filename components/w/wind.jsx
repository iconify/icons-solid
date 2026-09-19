import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qss-i-5ch.css';
import '../../css/x/x_3zjhbcg.css';
import '../../css/t/tbom9wbft.css';
import '../../css/f/fexlw8bmi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="qss-i-5ch"/><path class="x_3zjhbcg"/><path class="tbom9wbft"/><path class="fexlw8bmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:wind"} {...others} />);
}

export default Component;
