import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/aqce0abzy.css';
import '../../css/u/uc71xy3ii.css';
import '../../css/t/td0om22as.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><circle class="aqce0abzy"/><circle class="uc71xy3ii"/><path class="td0om22as"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-group-stroke-12"} {...others} />);
}

export default Component;
