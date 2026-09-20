import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yjdw7wb-b.css';
import '../../css/z/ztb096_ex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yjdw7wb-b"/><path clip-rule="evenodd" class="ztb096_ex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:earth-sharp-duotone"} {...others} />);
}

export default Component;
