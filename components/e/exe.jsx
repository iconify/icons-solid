import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls6_xn_4i.css';
import '../../css/z/zc3lmmbma.css';
import '../../css/x/xh1y7dbbu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ls6_xn_4i"><path class="zc3lmmbma"/><path class="xh1y7dbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:exe"} {...others} />);
}

export default Component;
