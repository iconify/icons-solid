import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/di_7p0b9x.css';
import '../../css/g/gqls9tv8v.css';
import '../../css/d/dfat0soba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="di_7p0b9x"/><path class="gqls9tv8v"/><path clip-rule="evenodd" class="dfat0soba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:chevron-double-up-o"} {...others} />);
}

export default Component;
