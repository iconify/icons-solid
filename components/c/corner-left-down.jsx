import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/v6i6r241r.css';
import '../../css/e/e2qe2xbzh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="v6i6r241r"/><path class="e2qe2xbzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:corner-left-down"} {...others} />);
}

export default Component;
