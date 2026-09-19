import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/x8oigu9lu.css';
import '../../css/m/mcs1znbxp.css';
import '../../css/x/xtp79fben.css';
import '../../css/e/e5ptpiwim.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="x8oigu9lu"/><path class="mcs1znbxp"/><path class="xtp79fben"/><path class="e5ptpiwim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-text-left"} {...others} />);
}

export default Component;
