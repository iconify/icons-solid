import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yjec4noqj.css';
import '../../css/j/ju5f01sxb.css';
import '../../css/t/tjyzh9t4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yjec4noqj"/><path clip-rule="evenodd" class="ju5f01sxb"/><path class="tjyzh9t4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:skateboarding2-duotone"} {...others} />);
}

export default Component;
