import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p8k8z9eib.css';
import '../../css/i/ie52vmbhx.css';
import '../../css/t/t7rl4acgf.css';
import '../../css/n/n7avn2bad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="p8k8z9eib"/><path class="ie52vmbhx wm-a"/><path class="t7rl4acgf wm-k"/><path class="n7avn2bad wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:database-sketch"} {...others} />);
}

export default Component;
