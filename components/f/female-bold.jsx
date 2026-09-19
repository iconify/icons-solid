import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cuwoy268i.css';
import '../../css/y/yyqzombkp.css';
import '../../css/j/jw6m5iv8c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cuwoy268i"/><path class="yyqzombkp"/><path class="jw6m5iv8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:female-bold"} {...others} />);
}

export default Component;
