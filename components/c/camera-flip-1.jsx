import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/e/e6vgm3bwt.css';
import '../../css/v/vd6j88bit.css';
import '../../css/e/efoveubqt.css';
import '../../css/e/ewsitqbiy.css';
import '../../css/t/t00ahdbzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="e6vgm3bwt"/><path class="vd6j88bit"/><path class="efoveubqt"/><path class="ewsitqbiy"/><path class="t00ahdbzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:camera-flip-1"} {...others} />);
}

export default Component;
