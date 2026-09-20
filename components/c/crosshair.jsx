import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/p/p4uln63wx.css';
import '../../css/j/j02i2z87g.css';
import '../../css/j/j7kjnkbzt.css';
import '../../css/k/kqj4f3iyl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="p4uln63wx"/><path class="j02i2z87g"/><path class="j7kjnkbzt"/><path class="kqj4f3iyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:crosshair"} {...others} />);
}

export default Component;
