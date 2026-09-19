import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/i/ich7_wz7i.css';
import '../../css/x/xx60y3bia.css';
import '../../css/o/o6-1wiggv.css';
import '../../css/g/gz49e1hrh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="ich7_wz7i"/><path class="xx60y3bia"/><path class="o6-1wiggv"/><path class="gz49e1hrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:disk"} {...others} />);
}

export default Component;
