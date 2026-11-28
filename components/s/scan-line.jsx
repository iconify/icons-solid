import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yl-5e19tl.css';
import '../../css/r/rl9mryfun.css';
import '../../css/f/f2a5cbb2a.css';
import '../../css/c/cu24_jbbf.css';
import '../../css/p/p-mzcvqtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yl-5e19tl"/><path class="rl9mryfun"/><path class="f2a5cbb2a"/><path class="cu24_jbbf"/><path class="p-mzcvqtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:scan-line"} {...others} />);
}

export default Component;
