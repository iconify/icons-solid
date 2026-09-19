import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/e/egyq1pb4f.css';
import '../../css/y/yfgog0bsg.css';
import '../../css/r/rwr7r_b4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><circle class="egyq1pb4f"/><path class="yfgog0bsg"/><path class="rwr7r_b4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:font-search"} {...others} />);
}

export default Component;
