import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xg1lcnbpv.css';
import '../../css/e/en376_own.css';
import '../../css/d/dk_5p9bho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xg1lcnbpv"/><path clip-rule="evenodd" class="en376_own"/><path class="dk_5p9bho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:translate2-filled"} {...others} />);
}

export default Component;
