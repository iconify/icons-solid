import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n04szjpnk.css';
import '../../css/k/kf0_gw6sp.css';
import '../../css/t/th7l-mbxq.css';
import '../../css/a/a0ojm8b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n04szjpnk"/><path class="kf0_gw6sp"/><path class="th7l-mbxq"/><path class="a0ojm8b0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:component-radio"} {...others} />);
}

export default Component;
