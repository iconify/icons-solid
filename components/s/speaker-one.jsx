import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/ddtcgulvx.css';
import '../../css/u/uptpsmn0f.css';
import '../../css/p/pp3ihrork.css';
import '../../css/y/yi2umkbkb.css';
import '../../css/r/r1kxxzn7q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="ddtcgulvx"/><path class="uptpsmn0f"/><path class="pp3ihrork"/><path class="yi2umkbkb"/><path class="r1kxxzn7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:speaker-one"} {...others} />);
}

export default Component;
