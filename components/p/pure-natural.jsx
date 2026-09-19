import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/pa6mvv7uc.css';
import '../../css/x/xyj-90bkx.css';
import '../../css/b/bkkx1v3jh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="pa6mvv7uc"/><path class="xyj-90bkx"/><path clip-rule="evenodd" class="bkkx1v3jh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pure-natural"} {...others} />);
}

export default Component;
