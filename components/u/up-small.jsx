import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t57tp2bwb.css';
import '../../css/v/vso0-xb8v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="t57tp2bwb"/><path class="vso0-xb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:up-small"} {...others} />);
}

export default Component;
