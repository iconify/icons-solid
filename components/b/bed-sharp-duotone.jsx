import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sh7hjab2q.css';
import '../../css/k/kqhe7jbbf.css';
import '../../css/b/bgktbgbir.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="sh7hjab2q"/><path clip-rule="evenodd" class="kqhe7jbbf"/><path class="bgktbgbir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bed-sharp-duotone"} {...others} />);
}

export default Component;
