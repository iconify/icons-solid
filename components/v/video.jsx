import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clsdao61r.css';
import '../../css/z/zc3lmmbma.css';
import '../../css/v/vbv_9ysna.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="clsdao61r"><path class="zc3lmmbma"/><path class="vbv_9ysna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:video"} {...others} />);
}

export default Component;
