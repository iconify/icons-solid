import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y-cpy7b_s.css';
import '../../css/p/p6oj0qb7p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="y-cpy7b_s"/><path class="p6oj0qb7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:trending-up"} {...others} />);
}

export default Component;
