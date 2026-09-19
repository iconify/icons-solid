import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jlkh9zbwk.css';
import '../../css/o/oqa_tmuef.css';
import '../../css/c/c-oeh2kvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jlkh9zbwk"/><path class="oqa_tmuef"/><path clip-rule="evenodd" class="c-oeh2kvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:virus-alt-outline-24px"} {...others} />);
}

export default Component;
