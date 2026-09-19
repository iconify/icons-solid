import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/f/fmezsg_0a.css';
import '../../css/d/d7myvrb7j.css';
import '../../css/z/zew7e1b0p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="fmezsg_0a"/><path class="d7myvrb7j"/><path class="zew7e1b0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:reload"} {...others} />);
}

export default Component;
