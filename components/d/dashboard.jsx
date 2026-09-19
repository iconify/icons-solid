import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/o/oy00sfc0r.css';
import '../../css/p/p6tkzij8z.css';
import '../../css/g/gr7996bbx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="oy00sfc0r"/><path class="p6tkzij8z"/><path class="gr7996bbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:dashboard"} {...others} />);
}

export default Component;
