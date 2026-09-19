import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ub5eqcb3m.css';
import '../../css/y/y-1omny8w.css';
import '../../css/p/pxs4nqqar.css';
import '../../css/x/xxkgek8_q.css';
import '../../css/n/nwbhjwbif.css';
import '../../css/h/h7yj2hb1w.css';
import '../../css/a/awskvbbmo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="ub5eqcb3m"/><path class="y-1omny8w"/><path class="pxs4nqqar"/><path class="xxkgek8_q"/><path class="nwbhjwbif"/><path class="h7yj2hb1w"/><path class="awskvbbmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:database-lock"} {...others} />);
}

export default Component;
