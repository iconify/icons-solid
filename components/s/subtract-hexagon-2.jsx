import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/m/muoa8lgor.css';
import '../../css/a/a0hdqrbyg.css';
import '../../css/q/qfsxdubtq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="muoa8lgor"/><path class="a0hdqrbyg"/><path class="qfsxdubtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:subtract-hexagon-2"} {...others} />);
}

export default Component;
