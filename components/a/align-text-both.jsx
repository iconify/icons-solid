import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dyeav1b1n.css';
import '../../css/x/x8oigu9lu.css';
import '../../css/x/xtp79fben.css';
import '../../css/w/wpmhq029i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dyeav1b1n"/><path class="x8oigu9lu"/><path class="xtp79fben"/><path class="wpmhq029i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-text-both"} {...others} />);
}

export default Component;
