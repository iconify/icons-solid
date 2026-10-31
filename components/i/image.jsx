import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qkpf7-2jn.css';
import '../../css/n/nnzchgbnn.css';
import '../../css/t/tldit3bfr.css';
import '../../css/w/wbnx7rnmg.css';
import '../../css/j/jua2lqbhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qkpf7-2jn wm-shadow"/><path class="nnzchgbnn wm-shadow"/><path class="tldit3bfr"/><path class="wbnx7rnmg"/><path class="jua2lqbhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:image"} {...others} />);
}

export default Component;
