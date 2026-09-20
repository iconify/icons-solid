import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c37wdnbmk.css';
import '../../css/p/ptysxtpiv.css';
import '../../css/t/tkjj65bgw.css';
import '../../css/u/u75qqq5xn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c37wdnbmk"/><path class="ptysxtpiv"/><path class="tkjj65bgw"/><path clip-rule="evenodd" class="u75qqq5xn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
