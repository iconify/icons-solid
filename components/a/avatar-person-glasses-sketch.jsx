import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hm2vo1b0z.css';
import '../../css/t/tbdw6sa0q.css';
import '../../css/y/yfdct_b5e.css';
import '../../css/a/avxkvvbkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hm2vo1b0z wm-k"/><path class="tbdw6sa0q wm-k"/><path class="wm-k yfdct_b5e"/><path class="avxkvvbkc wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-person-glasses-sketch"} {...others} />);
}

export default Component;
