import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pnvi2iprk.css';
import '../../css/r/r3if10wmo.css';
import '../../css/s/s8gsd3uwy.css';
import '../../css/g/gaepn6b7q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pnvi2iprk"/><path clip-rule="evenodd" class="r3if10wmo"/><path class="s8gsd3uwy"/><path clip-rule="evenodd" class="gaepn6b7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:child-cognition"} {...others} />);
}

export default Component;
