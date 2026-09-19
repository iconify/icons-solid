import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s8aq1abhv.css';
import '../../css/d/dq5fjybre.css';
import '../../css/f/f216bmpmc.css';
import '../../css/l/ldyzd45ig.css';
import '../../css/n/ndo9futaq.css';
import '../../css/x/xmscx4bzx.css';
import '../../css/b/bvjf7qbom.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s8aq1abhv"/><path class="dq5fjybre"/><path clip-rule="evenodd" class="f216bmpmc"/><path class="ldyzd45ig"/><path clip-rule="evenodd" class="ndo9futaq"/><path class="xmscx4bzx"/><path clip-rule="evenodd" class="bvjf7qbom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:expectorate"} {...others} />);
}

export default Component;
