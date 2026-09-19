import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/t/taetgzrim.css';
import '../../css/w/wg6baqb2y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="taetgzrim"/><path class="wg6baqb2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:distribute-vertical-spacing"} {...others} />);
}

export default Component;
