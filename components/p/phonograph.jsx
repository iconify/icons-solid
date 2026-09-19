import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c52v18b9m.css';
import '../../css/v/vu9m0dbsd.css';
import '../../css/u/u5qmq6bbx.css';
import '../../css/c/c297e7buy.css';
import '../../css/y/yqdzk4yeb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="c52v18b9m"/><circle class="vu9m0dbsd"/><rect class="u5qmq6bbx"/><rect class="c297e7buy"/><path class="yqdzk4yeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:phonograph"} {...others} />);
}

export default Component;
