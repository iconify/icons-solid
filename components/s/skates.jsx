import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xphwdosvg.css';
import '../../css/w/w_0vaslvt.css';
import '../../css/t/tcqvgbceq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xphwdosvg"/><path class="w_0vaslvt"/><rect class="tcqvgbceq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:skates"} {...others} />);
}

export default Component;
