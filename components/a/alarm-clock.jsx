import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ptjn9dspd.css';
import '../../css/s/snfwzgyfx.css';
import '../../css/l/lh9k_h7vv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ptjn9dspd"/><path clip-rule="evenodd" class="snfwzgyfx"/><path class="lh9k_h7vv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:alarm-clock"} {...others} />);
}

export default Component;
