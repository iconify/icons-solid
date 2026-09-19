import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/ybut5hbil.css';
import '../../css/l/lktoiubne.css';
import '../../css/j/jr0ql2j0k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ybut5hbil"/><path class="lktoiubne"/><path class="jr0ql2j0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:afferent-three"} {...others} />);
}

export default Component;
