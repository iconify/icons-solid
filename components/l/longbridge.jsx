import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/az6y7_ogd.css';
import '../../css/d/dlrj73gin.css';
import '../../css/n/nfvuruhhu.css';
import '../../css/m/mkng3jhbk.css';
import '../../css/h/h532m2ves.css';

const viewBox = {"width":69,"height":69};
const content = `<g class="ft5dv1b6b"><path class="az6y7_ogd"/><path class="dlrj73gin"/><path class="nfvuruhhu"/><path class="mkng3jhbk"/><path class="h532m2ves"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:longbridge"} {...others} />);
}

export default Component;
