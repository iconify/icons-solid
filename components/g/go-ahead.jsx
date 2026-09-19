import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mpbf21b5n.css';
import '../../css/e/e9umdvb8b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="mpbf21b5n"/><path class="e9umdvb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:go-ahead"} {...others} />);
}

export default Component;
