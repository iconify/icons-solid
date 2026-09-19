import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pu-1t1bjc.css';
import '../../css/d/dhqfjzgtu.css';
import '../../css/x/xekajxbvi.css';
import '../../css/c/c3qa00b_x.css';
import '../../css/r/r02hsj80l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="pu-1t1bjc"/><path class="dhqfjzgtu"/><path class="xekajxbvi"/><path class="c3qa00b_x"/><path class="r02hsj80l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:snail"} {...others} />);
}

export default Component;
