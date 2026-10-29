import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fzx9q9b-g.css';
import '../../css/a/aecemzbxq.css';
import '../../css/w/wu7pu2bgf.css';
import '../../css/z/z3lq_puen.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fzx9q9b-g wm-k"/><path class="aecemzbxq wm-a"/><path class="wm-k wu7pu2bgf"/><path class="wm-a z3lq_puen"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-teen-sketch"} {...others} />);
}

export default Component;
