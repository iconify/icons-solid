import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nn092_bdq.css';
import '../../css/y/yj29tobmn.css';
import '../../css/k/k9krlhbfd.css';
import '../../css/c/cu8kljwan.css';
import '../../css/o/or22xlbjs.css';
import '../../css/q/q2it56bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nn092_bdq wm-shadow"/><path class="yj29tobmn"/><path class="k9krlhbfd"/><path class="cu8kljwan"/><path class="or22xlbjs"/><path class="q2it56bgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:chart-bar"} {...others} />);
}

export default Component;
