import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/p/p7bz0ccij.css';
import '../../css/c/cw89m0smd.css';
import '../../css/a/aohimmb-r.css';
import '../../css/p/p3ox6bcgg.css';
import '../../css/k/knrtyrjlr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="p7bz0ccij"/><path class="cw89m0smd"/><path class="aohimmb-r"/><path class="p3ox6bcgg"/><path class="knrtyrjlr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:grinder"} {...others} />);
}

export default Component;
