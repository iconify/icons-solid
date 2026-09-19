import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls6_xn_4i.css';
import '../../css/w/w03w98eed.css';
import '../../css/q/qizstxbea.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ls6_xn_4i"><path class="w03w98eed"/><path class="qizstxbea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:binary"} {...others} />);
}

export default Component;
