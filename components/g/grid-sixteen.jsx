import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hl30v4bui.css';
import '../../css/q/q92edjb1p.css';
import '../../css/u/uz7tbce5r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><rect class="hl30v4bui"/><path class="q92edjb1p"/><path class="uz7tbce5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:grid-sixteen"} {...others} />);
}

export default Component;
