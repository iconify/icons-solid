import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u5ytslu4k.css';
import '../../css/j/je6svqzqh.css';
import '../../css/r/rkuupdbyq.css';
import '../../css/u/uh5if_b0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u5ytslu4k"/><path class="je6svqzqh"/><path class="rkuupdbyq"/><path class="uh5if_b0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wifi-connected-01"} {...others} />);
}

export default Component;
