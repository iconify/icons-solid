import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol1qgland.css';
import '../../css/k/k0rioybmz.css';
import '../../css/n/n9qqvlh5r.css';
import '../../css/w/wah34acde.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ol1qgland"><path class="k0rioybmz"/><path class="n9qqvlh5r"/><path class="wah34acde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:add-pic"} {...others} />);
}

export default Component;
