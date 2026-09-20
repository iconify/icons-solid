import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b4877sbkr.css';
import '../../css/n/nerkymkii.css';
import '../../css/f/fyr67fbfm.css';
import '../../css/j/jcod0ib9z.css';
import '../../css/r/rp4i65bvu.css';
import '../../css/s/s18mjpbze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="b4877sbkr"/><path class="nerkymkii"/><path class="fyr67fbfm"/><path class="jcod0ib9z"/><path class="rp4i65bvu"/><path class="s18mjpbze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flash-drive-line-duotone"} {...others} />);
}

export default Component;
