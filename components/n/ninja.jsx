import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls6_xn_4i.css';
import '../../css/e/e9xcq6pkk.css';
import '../../css/d/dox57-bsu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ls6_xn_4i"><path class="e9xcq6pkk"/><path class="dox57-bsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:ninja"} {...others} />);
}

export default Component;
