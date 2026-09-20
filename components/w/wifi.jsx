import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/g/g-g_tbbws.css';
import '../../css/v/v4jlxqdsi.css';
import '../../css/s/sv-cgfflk.css';
import '../../css/c/cihtvxb9i.css';
import '../../css/s/s7ocxccpe.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="g-g_tbbws"/><path class="v4jlxqdsi"/><path class="sv-cgfflk"/></g><path class="cihtvxb9i"/><path class="s7ocxccpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:wifi"} {...others} />);
}

export default Component;
