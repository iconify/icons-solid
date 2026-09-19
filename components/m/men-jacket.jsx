import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/x3uktib1g.css';
import '../../css/s/ss6r-yy7o.css';
import '../../css/i/iupnzyndz.css';
import '../../css/i/i894tjbas.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="x3uktib1g"/><path class="ss6r-yy7o"/><path class="iupnzyndz"/><path class="i894tjbas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:men-jacket"} {...others} />);
}

export default Component;
