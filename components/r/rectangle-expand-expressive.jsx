import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b68duzbyt.css';
import '../../css/i/isgxx3bho.css';
import '../../css/c/cpxtebbji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b68duzbyt"/><path clip-rule="evenodd" class="isgxx3bho"/><path class="cpxtebbji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:rectangle-expand-expressive"} {...others} />);
}

export default Component;
