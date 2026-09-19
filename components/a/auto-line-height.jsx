import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/t/t888go1xk.css';
import '../../css/y/yfuxcacdn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="t888go1xk"/><path class="yfuxcacdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:auto-line-height"} {...others} />);
}

export default Component;
