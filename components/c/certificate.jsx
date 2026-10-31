import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sperd-qmw.css';
import '../../css/v/viz_352cz.css';
import '../../css/r/r8owxqjhe.css';
import '../../css/q/qawkimhao.css';
import '../../css/d/ddj4t94hd.css';
import '../../css/w/wx2u-i2yf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sperd-qmw wm-shadow"/><path class="viz_352cz"/><path class="r8owxqjhe"/><path class="qawkimhao"/><path class="ddj4t94hd"/><path class="wx2u-i2yf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:certificate"} {...others} />);
}

export default Component;
