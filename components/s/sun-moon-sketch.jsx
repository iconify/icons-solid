import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kvs9x6woa.css';
import '../../css/u/u9yukr_vq.css';
import '../../css/q/q68_a-bcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kvs9x6woa"/><path class="u9yukr_vq wm-k"/><path class="q68_a-bcp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sun-moon-sketch"} {...others} />);
}

export default Component;
