import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lklawe5cz.css';
import '../../css/j/j40labcrn.css';
import '../../css/g/gv3k2ybsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="lklawe5cz"/><rect class="j40labcrn"/><path class="gv3k2ybsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shapes"} {...others} />);
}

export default Component;
