import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnxi2rbnm.css';
import '../../css/u/ufjgw78te.css';
import '../../css/b/bj-y4g4bm.css';
import '../../css/n/n5-oh3bbk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wnxi2rbnm"><path class="ufjgw78te"/><path class="bj-y4g4bm"/><path class="n5-oh3bbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:recycle-1-flat"} {...others} />);
}

export default Component;
