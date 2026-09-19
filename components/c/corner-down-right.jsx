import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eo1c2mb1z.css';
import '../../css/b/b9em1-hoc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="eo1c2mb1z"/><path class="b9em1-hoc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:corner-down-right"} {...others} />);
}

export default Component;
