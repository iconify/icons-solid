import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xolx0lz2c.css';
import '../../css/n/nbvgmcc_e.css';
import '../../css/k/kb6ezqarq.css';
import '../../css/n/nxqt7acrr.css';
import '../../css/w/wvfugfb3q.css';
import '../../css/r/rjas32bmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow xolx0lz2c"/><path class="nbvgmcc_e"/><path class="kb6ezqarq"/><path class="nxqt7acrr"/><path class="wm-shine wvfugfb3q"/><path class="rjas32bmi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:shield-user"} {...others} />);
}

export default Component;
