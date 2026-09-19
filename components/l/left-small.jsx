import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/irvujnzux.css';
import '../../css/h/hx47j0bao.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="irvujnzux"/><path class="hx47j0bao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:left-small"} {...others} />);
}

export default Component;
