import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mita_xbuw.css';
import '../../css/r/r8_oqnbcm.css';
import '../../css/s/su1i-1q6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mita_xbuw"/><path class="r8_oqnbcm"/><path clip-rule="evenodd" class="su1i-1q6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:donut-filled"} {...others} />);
}

export default Component;
