import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rrvmn-bnv.css';
import '../../css/v/vjegeb-cx.css';
import '../../css/x/xfcwl2bpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rrvmn-bnv"/><path class="vjegeb-cx"/><path class="xfcwl2bpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:calendar-fold-solid"} {...others} />);
}

export default Component;
