import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/znogc8yyg.css';
import '../../css/g/gafy37gmj.css';
import '../../css/s/s0c6a526o.css';
import '../../css/t/ty9rd6b5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="znogc8yyg"/><path class="gafy37gmj"/><path class="s0c6a526o"/><path class="ty9rd6b5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-search-bold"} {...others} />);
}

export default Component;
