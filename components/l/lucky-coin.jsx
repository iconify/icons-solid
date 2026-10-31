import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wtrv8b7py.css';
import '../../css/k/k1-zf16ki.css';
import '../../css/x/xv-f_kl2n.css';
import '../../css/q/q4fjqwbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wtrv8b7py"/><path class="k1-zf16ki wm-shine"/><path class="wm-k xv-f_kl2n"/><path class="q4fjqwbqj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:lucky-coin"} {...others} />);
}

export default Component;
