import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/f94-qabgl.css';
import '../../css/u/uyirz0bfw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="f94-qabgl"/><path class="uyirz0bfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rotation-horizontal"} {...others} />);
}

export default Component;
