import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kpxm58b9y.css';
import '../../css/o/odiz_iqsy.css';
import '../../css/i/ipuyzhukx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="kpxm58b9y"/><path class="odiz_iqsy"/><path class="ipuyzhukx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sinusoid"} {...others} />);
}

export default Component;
