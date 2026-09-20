import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wf89k6buf.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/wrqhnubdm.css';
import '../../css/c/c6g87kbzs.css';
import '../../css/n/n7bi59bvp.css';
import '../../css/f/f0le29xkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wf89k6buf"/><g class="mc2zb0bvp"><path class="wrqhnubdm"/><path class="c6g87kbzs"/></g><path class="n7bi59bvp"/><path class="f0le29xkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:branching-paths-up-line-duotone"} {...others} />);
}

export default Component;
