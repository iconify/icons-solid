import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/aqjfm90km.css';
import '../../css/i/i3o_wjjbf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="aqjfm90km"/><path class="i3o_wjjbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:corner-right-down"} {...others} />);
}

export default Component;
