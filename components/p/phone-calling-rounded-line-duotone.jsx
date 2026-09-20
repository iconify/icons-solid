import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bqq_qyjlf.css';
import '../../css/b/bucfw6bdg.css';
import '../../css/q/qy44fxbnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bqq_qyjlf"/><path class="bucfw6bdg"/><path class="qy44fxbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-rounded-line-duotone"} {...others} />);
}

export default Component;
