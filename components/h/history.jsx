import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kb-tg7b0i.css';
import '../../css/i/i3pv7acav.css';
import '../../css/a/a6yd-gboc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="kb-tg7b0i"/><path class="i3pv7acav"/><path class="a6yd-gboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:history"} {...others} />);
}

export default Component;
