import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2tqycg6p.css';
import '../../css/o/ocnnyqlgu.css';
import '../../css/y/y31nmxx1m.css';
import '../../css/m/mwc1x19yg.css';
import '../../css/z/zlxpw4b5t.css';
import '../../css/r/rkheebcmn.css';
import '../../css/g/g76jryb7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z2tqycg6p"/><path class="ocnnyqlgu"/><path class="y31nmxx1m"/><path class="mwc1x19yg"/><path class="zlxpw4b5t"/><path class="rkheebcmn"/><path class="g76jryb7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:settings-slider-desktop-horizontal"} {...others} />);
}

export default Component;
