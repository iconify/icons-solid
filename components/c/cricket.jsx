import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/c3237s2cq.css';
import '../../css/k/kx81f8bnu.css';
import '../../css/o/ozqxqdb2l.css';
import '../../css/x/xcez03_th.css';
import '../../css/n/nnfke78sg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="c3237s2cq"/><path class="kx81f8bnu wm-shine"/><path class="ozqxqdb2l wm-k"/><path class="wm-a xcez03_th"/><path class="nnfke78sg wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cricket"} {...others} />);
}

export default Component;
