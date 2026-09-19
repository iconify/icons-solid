import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-2n_lbtc.css';
import '../../css/k/k8z476b2t.css';
import '../../css/j/jteu77bhb.css';
import '../../css/v/vz1gykbsn.css';
import '../../css/r/r5ui-rboh.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="j-2n_lbtc"/><path class="k8z476b2t"/><path class="jteu77bhb"/><path class="vz1gykbsn"/><path class="r5ui-rboh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:expand"} {...others} />);
}

export default Component;
