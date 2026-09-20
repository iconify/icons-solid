import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9kbmpviz.css';
import '../../css/s/soa_04_3y.css';
import '../../css/k/kpz_0rvrz.css';
import '../../css/w/wzhzezsph.css';
import '../../css/a/a7gs-69bk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i9kbmpviz"/><path class="soa_04_3y"/><path class="kpz_0rvrz"/><path class="wzhzezsph"/><path class="a7gs-69bk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:window-tabs"} {...others} />);
}

export default Component;
