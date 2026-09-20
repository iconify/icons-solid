import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-nfw68nc.css';
import '../../css/c/c4shklb7z.css';
import '../../css/a/al8gf2bkd.css';
import '../../css/r/rmbkrup2p.css';
import '../../css/w/wwhta8rci.css';
import '../../css/e/ez5yvcb0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f-nfw68nc"/><path class="c4shklb7z"/><path class="al8gf2bkd"/><path class="rmbkrup2p"/><path class="wwhta8rci"/><path class="ez5yvcb0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-2-line-duotone"} {...others} />);
}

export default Component;
