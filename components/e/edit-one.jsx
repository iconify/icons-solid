import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/r/rak7ltbwt.css';
import '../../css/o/oi_or9w5w.css';
import '../../css/y/y4y7fgbwm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="rak7ltbwt"/><path class="oi_or9w5w"/><path class="y4y7fgbwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:edit-one"} {...others} />);
}

export default Component;
