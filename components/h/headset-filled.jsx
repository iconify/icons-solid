import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1s0-5-jk.css';
import '../../css/k/kydtjqbbg.css';
import '../../css/k/kmo5hfb0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 8.88 18.36)" class="f1s0-5-jk"/><rect transform="matrix(0 -1 -1 0 21.58 18.36)" class="f1s0-5-jk"/><path class="kydtjqbbg"/><path class="kmo5hfb0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:headset-filled"} {...others} />);
}

export default Component;
