import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/skuh4r3wi.css';
import '../../css/u/uam7o_q-z.css';
import '../../css/b/bl595ebnf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="skuh4r3wi"/><path class="uam7o_q-z"/><path clip-rule="evenodd" class="bl595ebnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-a-n"} {...others} />);
}

export default Component;
