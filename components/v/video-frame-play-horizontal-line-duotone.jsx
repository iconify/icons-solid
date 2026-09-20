import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/utymdgx_e.css';
import '../../css/x/x1sq-9b4b.css';
import '../../css/c/cfl3_9b4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="utymdgx_e"/><path class="x1sq-9b4b"/><path class="cfl3_9b4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-play-horizontal-line-duotone"} {...others} />);
}

export default Component;
