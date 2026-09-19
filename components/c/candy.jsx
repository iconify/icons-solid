import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/r/rniplklmo.css';
import '../../css/x/xnficmu9w.css';
import '../../css/p/px6_9g-lf.css';
import '../../css/z/zahaijvin.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><circle class="rniplklmo"/><path class="xnficmu9w"/><path class="px6_9g-lf"/><path class="zahaijvin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:candy"} {...others} />);
}

export default Component;
