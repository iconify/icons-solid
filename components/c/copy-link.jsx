import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/w/w6ss4accp.css';
import '../../css/j/jnn7bgbxn.css';
import '../../css/r/r6lnibbbz.css';
import '../../css/s/s4ru-lp9d.css';
import '../../css/p/p5i3gbb9b.css';
import '../../css/d/d-50liiah.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="w6ss4accp"/><rect class="jnn7bgbxn"/><path class="r6lnibbbz"/><path class="s4ru-lp9d"/><path class="p5i3gbb9b"/><path class="d-50liiah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:copy-link"} {...others} />);
}

export default Component;
