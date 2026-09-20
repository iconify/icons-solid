import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_njqbc3z.css';
import '../../css/w/wvlta01vs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e_njqbc3z"/><path class="wvlta01vs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:golf-filled"} {...others} />);
}

export default Component;
