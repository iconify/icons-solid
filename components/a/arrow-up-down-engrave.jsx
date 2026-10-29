import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mz969er-e.css';
import '../../css/h/h0y86pbgh.css';
import '../../css/g/g-i1yxtxz.css';
import '../../css/h/h2-2dgnfu.css';
import '../../css/e/e_2n_ybqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mz969er-e wm-k"/><path class="h0y86pbgh wm-a"/><path class="g-i1yxtxz wm-shadow"/><path class="h2-2dgnfu wm-k"/><path class="e_2n_ybqq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-up-down-engrave"} {...others} />);
}

export default Component;
