import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zvid33bdo.css';
import '../../css/y/yea7dilqg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="zvid33bdo"/><path class="yea7dilqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:minecart-loaded"} {...others} />);
}

export default Component;
