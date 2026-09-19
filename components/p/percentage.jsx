import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/clqddfbhz.css';
import '../../css/b/b_grjgmus.css';
import '../../css/o/opakkwbyw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle class="clqddfbhz"/><circle class="b_grjgmus"/><path class="opakkwbyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:percentage"} {...others} />);
}

export default Component;
