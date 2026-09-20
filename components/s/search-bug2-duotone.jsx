import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xsk5_p2ri.css';
import '../../css/w/wf82r5bjl.css';
import '../../css/v/vm6fd7g8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xsk5_p2ri"/><path class="wf82r5bjl"/><path clip-rule="evenodd" class="vm6fd7g8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:search-bug2-duotone"} {...others} />);
}

export default Component;
