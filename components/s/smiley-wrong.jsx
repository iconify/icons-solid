import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ura5j9k2q.css';
import '../../css/w/wuyn-hbnm.css';
import '../../css/l/l3z2k4aaj.css';
import '../../css/a/a_nz5fb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ura5j9k2q"/><path class="wuyn-hbnm"/><path class="l3z2k4aaj"/><path class="a_nz5fb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:smiley-wrong"} {...others} />);
}

export default Component;
