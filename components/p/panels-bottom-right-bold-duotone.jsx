import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jq-l3wspt.css';
import '../../css/l/lof832c4s.css';
import '../../css/a/am2oa8bcf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jq-l3wspt"/><path class="lof832c4s"/><path class="am2oa8bcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-bottom-right-bold-duotone"} {...others} />);
}

export default Component;
