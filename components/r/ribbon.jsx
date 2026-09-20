import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/iibwpsbbj.css';
import '../../css/c/c6_bbtcwf.css';
import '../../css/w/w8jciy6rf.css';
import '../../css/j/jfzdqob0g.css';
import '../../css/e/e_1vtb5gz.css';
import '../../css/u/uwnhgdppu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="iibwpsbbj"/><path class="c6_bbtcwf"/><path class="w8jciy6rf"/><path class="jfzdqob0g"/><path class="e_1vtb5gz"/><path class="uwnhgdppu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:ribbon"} {...others} />);
}

export default Component;
