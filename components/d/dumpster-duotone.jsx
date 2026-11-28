import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q7q0a78ln.css';
import '../../css/d/dn8_81bnp.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="q7q0a78ln"/><path class="dn8_81bnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:dumpster-duotone"} {...others} />);
}

export default Component;
