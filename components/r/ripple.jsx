import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/umiv7jggm.css';
import '../../css/o/o2zkt_b5k.css';
import '../../css/r/rbfb3qb0e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="umiv7jggm"/><path class="o2zkt_b5k"/><path class="rbfb3qb0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ripple"} {...others} />);
}

export default Component;
