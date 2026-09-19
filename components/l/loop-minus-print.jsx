import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0nds4_gn.css';
import '../../css/y/yovjmyyvz.css';
import '../../css/u/u8qw3jobp.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a0nds4_gn"/><path clip-rule="evenodd" class="yovjmyyvz"/><path class="u8qw3jobp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:loop-minus-print"} {...others} />);
}

export default Component;
