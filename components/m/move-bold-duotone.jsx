import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rzpou6svz.css';
import '../../css/f/fi431lbyf.css';
import '../../css/z/z4pfb8bbg.css';
import '../../css/y/yhgla3s_k.css';
import '../../css/z/z8bxvo7ck.css';
import '../../css/x/xqylf86ms.css';
import '../../css/r/rxwmldbwv.css';
import '../../css/e/ee3j0kbev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="rzpou6svz"/><path class="fi431lbyf"/><path class="z4pfb8bbg"/><path class="yhgla3s_k"/></g><path class="z8bxvo7ck"/><path class="xqylf86ms"/><path class="rxwmldbwv"/><path class="ee3j0kbev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-bold-duotone"} {...others} />);
}

export default Component;
