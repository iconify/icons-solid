import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wv3avxa3e.css';
import '../../css/t/tt2ye8b1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="wv3avxa3e"/><path class="tt2ye8b1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:terminal-cursor-sharp-duotone"} {...others} />);
}

export default Component;
