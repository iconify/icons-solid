import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/w/wrqhnubdm.css';
import '../../css/c/c6g87kbzs.css';
import '../../css/n/n7bi59bvp.css';
import '../../css/f/f0le29xkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="wrqhnubdm"/><path class="c6g87kbzs"/><path class="n7bi59bvp"/><path class="f0le29xkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:branching-paths-up-linear"} {...others} />);
}

export default Component;
