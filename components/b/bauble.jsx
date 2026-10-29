import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sypk3l-ex.css';
import '../../css/k/khl0-5ytd.css';
import '../../css/x/xig3z6n5l.css';
import '../../css/h/hr0qvf_el.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sypk3l-ex wm-k"/><path class="khl0-5ytd wm-a"/><path class="xig3z6n5l"/><path class="hr0qvf_el"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bauble"} {...others} />);
}

export default Component;
