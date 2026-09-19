import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jbbmi7j6c.css';
import '../../css/u/u71nc2bjp.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><path class="jbbmi7j6c"/><path class="u71nc2bjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:mic-compact"} {...others} />);
}

export default Component;
