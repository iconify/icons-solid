import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b3m1dxb1v.css';
import '../../css/a/aektm6bmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="b3m1dxb1v"/><path clip-rule="evenodd" class="aektm6bmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:exclamation-mark-triangle"} {...others} />);
}

export default Component;
