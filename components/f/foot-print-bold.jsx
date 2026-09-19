import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3j7pccxy.css';
import '../../css/t/t-ctftbys.css';
import '../../css/w/wfa4t_zlf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r3j7pccxy"/><path class="t-ctftbys"/><path class="wfa4t_zlf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:foot-print-bold"} {...others} />);
}

export default Component;
