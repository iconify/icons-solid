import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e57mt9qpn.css';
import '../../css/f/fzq5egeqa.css';
import '../../css/b/bi9r08orm.css';
import '../../css/w/wopk95bgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e57mt9qpn"/><path class="fzq5egeqa wm-a"/><path class="bi9r08orm wm-k"/><path class="wm-a wopk95bgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-cat-sketch"} {...others} />);
}

export default Component;
