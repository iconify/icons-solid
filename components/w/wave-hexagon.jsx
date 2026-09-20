import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/e/e-kurgb7l.css';
import '../../css/k/km80xtbph.css';
import '../../css/z/zbj2m4bkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="e-kurgb7l"/><path class="km80xtbph"/><path class="zbj2m4bkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:wave-hexagon"} {...others} />);
}

export default Component;
