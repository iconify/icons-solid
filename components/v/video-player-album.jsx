import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i36pw5b3j.css';
import '../../css/w/wv0y7zb8m.css';
import '../../css/x/xc3zmccph.css';
import '../../css/s/sebkskbso.css';
import '../../css/g/geaq47zpm.css';
import '../../css/b/bx-73714x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i36pw5b3j"/><path class="wv0y7zb8m"/><path class="xc3zmccph"/><path class="sebkskbso"/><path class="geaq47zpm"/><path class="bx-73714x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:video-player-album"} {...others} />);
}

export default Component;
