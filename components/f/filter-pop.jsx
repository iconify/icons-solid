import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-01p2b3g.css';
import '../../css/w/wq745y84s.css';
import '../../css/o/ol3nop4gg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="t-01p2b3g"/><path class="wq745y84s"/><path class="ol3nop4gg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:filter-pop"} {...others} />);
}

export default Component;
