import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/g/gr941wbsm.css';
import '../../css/h/h9rsgyxuw.css';
import '../../css/p/p6dgoyb0g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="gr941wbsm"/><path class="h9rsgyxuw"/><path class="p6dgoyb0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:comments"} {...others} />);
}

export default Component;
