import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sng0m5e4g.css';
import '../../css/e/emnqjpbpk.css';
import '../../css/m/m8jecfmey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sng0m5e4g"/><path class="emnqjpbpk"/><path clip-rule="evenodd" class="m8jecfmey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:speaker-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
