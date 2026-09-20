import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bucfw6bdg.css';
import '../../css/q/qy44fxbnk.css';
import '../../css/l/lqw335bch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bucfw6bdg"/><path class="qy44fxbnk"/><path class="lqw335bch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-rounded-linear"} {...others} />);
}

export default Component;
