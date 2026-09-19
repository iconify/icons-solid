import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/n/na3dx1erd.css';
import '../../css/j/j697vbfod.css';
import '../../css/f/ffxn0rb1n.css';
import '../../css/k/khejtg7il.css';
import '../../css/m/mrxnzhbpk.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="na3dx1erd"/><path class="j697vbfod"/><path class="ffxn0rb1n"/><path class="khejtg7il"/><path class="mrxnzhbpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:secure"} {...others} />);
}

export default Component;
