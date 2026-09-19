import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/getxc3bfc.css';
import '../../css/d/di0-edcue.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="getxc3bfc"/><path class="di0-edcue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-turn-slight-left"} {...others} />);
}

export default Component;
