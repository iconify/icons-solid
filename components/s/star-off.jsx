import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i0oegouph.css';
import '../../css/u/u99ey4bwo.css';
import '../../css/b/bqxahkbri.css';
import '../../css/n/njzmc9yqy.css';
import '../../css/p/pvp4t_bhi.css';
import '../../css/e/eziksjbis.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="i0oegouph wm-shadow"/><path class="u99ey4bwo"/><path class="bqxahkbri"/><path class="njzmc9yqy"/><path class="pvp4t_bhi"/><path class="eziksjbis"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:star-off"} {...others} />);
}

export default Component;
