import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/j8dwdkbwo.css';
import '../../css/v/vjtozk_jx.css';
import '../../css/c/c6oktlogx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="j8dwdkbwo"/><path clip-rule="evenodd" class="vjtozk_jx"/><path class="c6oktlogx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:monitor-off"} {...others} />);
}

export default Component;
