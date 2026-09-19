import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jpfn87ibu.css';
import '../../css/x/x9oovrbef.css';
import '../../css/p/pil0xabkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jpfn87ibu"/><path class="x9oovrbef"/><path clip-rule="evenodd" class="pil0xabkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:chevron-double-down-o"} {...others} />);
}

export default Component;
