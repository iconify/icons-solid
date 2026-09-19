import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/s4ro1caps.css';
import '../../css/w/wdybsacyc.css';
import '../../css/u/utzdrrbns.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="s4ro1caps"/><path class="wdybsacyc"/><path class="utzdrrbns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:women-coat"} {...others} />);
}

export default Component;
