import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lid049njr.css';
import '../../css/x/xeb-fib6w.css';
import '../../css/m/mk7_ts7zy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="lid049njr"/><path class="xeb-fib6w"/><path class="mk7_ts7zy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:podium-1-sharp-two-tone"} {...others} />);
}

export default Component;
