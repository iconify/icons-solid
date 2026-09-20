import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/w/wi9_bxbcj.css';
import '../../css/b/b40hxqbrx.css';
import '../../css/i/iscyndbhr.css';
import '../../css/i/iju8bibep.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path clip-rule="evenodd" class="wi9_bxbcj"/><path class="b40hxqbrx"/></g><path clip-rule="evenodd" class="iscyndbhr"/><path class="iju8bibep"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:speaker-low-circle"} {...others} />);
}

export default Component;
