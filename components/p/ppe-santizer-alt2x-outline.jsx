import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iqynwgt5r.css';
import '../../css/j/joatjpbix.css';
import '../../css/k/k-pblkkbo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iqynwgt5r"/><path class="joatjpbix"/><path clip-rule="evenodd" class="k-pblkkbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ppe-santizer-alt2x-outline"} {...others} />);
}

export default Component;
