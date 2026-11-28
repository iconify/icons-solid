import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjlm80zrp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yl-5e19tl.css';
import '../../css/r/rl9mryfun.css';
import '../../css/f/f2a5cbb2a.css';
import '../../css/c/cu24_jbbf.css';
import '../../css/l/lb0-kkbgx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kjlm80zrp secondary"/><g class="dt0cm9dhy primary"><path class="yl-5e19tl"/><path class="rl9mryfun"/><path class="f2a5cbb2a"/><path class="cu24_jbbf"/><path class="lb0-kkbgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:scan-heart-duo"} {...others} />);
}

export default Component;
