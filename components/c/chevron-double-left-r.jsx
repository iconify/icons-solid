import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mod_js00l.css';
import '../../css/k/kok6v3bqe.css';
import '../../css/p/p8t9n2b4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mod_js00l"/><path class="kok6v3bqe"/><path clip-rule="evenodd" class="p8t9n2b4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:chevron-double-left-r"} {...others} />);
}

export default Component;
