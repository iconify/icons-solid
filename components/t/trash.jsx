import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/na4rgbmvw.css';
import '../../css/m/mqt8g0b7o.css';
import '../../css/f/f9guiachc.css';
import '../../css/c/ciatibdic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="na4rgbmvw"/><path class="mqt8g0b7o"/><path class="f9guiachc"/><path class="ciatibdic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:trash"} {...others} />);
}

export default Component;
