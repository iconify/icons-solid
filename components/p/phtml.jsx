import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc4hxmbhx.css';
import '../../css/s/swcymbbdq.css';
import '../../css/e/e33e2gb6x.css';

const viewBox = {"width":16,"height":18};
const content = `<g class="zc4hxmbhx"><path class="swcymbbdq"/><path class="e33e2gb6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:phtml"} {...others} />);
}

export default Component;
