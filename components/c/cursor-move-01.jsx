import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/ccv5dxm4g.css';
import '../../css/b/bgqph-7hs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ccv5dxm4g"/><path class="bgqph-7hs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cursor-move-01"} {...others} />);
}

export default Component;
