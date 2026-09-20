import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/a/ag7zr8swn.css';
import '../../css/n/n2upzxbar.css';
import '../../css/y/y-4hcgbed.css';
import '../../css/c/ct68avbys.css';
import '../../css/s/s5-z42b4o.css';
import '../../css/a/agkjp5bec.css';
import '../../css/c/chhgf-xbk.css';
import '../../css/w/w_4htojmi.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="ag7zr8swn"/><path clip-rule="evenodd" class="n2upzxbar"/><path class="y-4hcgbed"/><path clip-rule="evenodd" class="ct68avbys"/><path clip-rule="evenodd" class="s5-z42b4o"/></g><path clip-rule="evenodd" class="agkjp5bec"/><path clip-rule="evenodd" class="chhgf-xbk"/><path clip-rule="evenodd" class="w_4htojmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:hourglass"} {...others} />);
}

export default Component;
