import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ewujkmbst.css';
import '../../css/u/uu97nydpu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ewujkmbst"/><rect class="uu97nydpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chart-pie-one"} {...others} />);
}

export default Component;
