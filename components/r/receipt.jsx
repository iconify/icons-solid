import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7f-0gbbr.css';
import '../../css/p/pdih5ccwh.css';
import '../../css/i/itp5xgbqr.css';
import '../../css/f/f22jdzbin.css';
import '../../css/s/si61p5buj.css';
import '../../css/f/fl4w_b36b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q7f-0gbbr"/><path class="pdih5ccwh"/><path class="itp5xgbqr"/><path class="f22jdzbin"/><path class="si61p5buj"/><path class="fl4w_b36b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:receipt"} {...others} />);
}

export default Component;
