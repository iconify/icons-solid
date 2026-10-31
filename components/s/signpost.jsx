import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/k297yj-2b.css';
import '../../css/q/q--ji-pfw.css';
import '../../css/g/gmua_e35o.css';
import '../../css/s/salvrk-up.css';
import '../../css/n/nd4w_gbkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="k297yj-2b wm-shadow"/><path class="q--ji-pfw wm-shadow"/><path class="gmua_e35o"/><path class="salvrk-up"/><path class="nd4w_gbkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:signpost"} {...others} />);
}

export default Component;
