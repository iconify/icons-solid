import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pm-oxkq7l.css';
import '../../css/k/k45nei59j.css';
import '../../css/x/x1swjoy7s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="pm-oxkq7l"/><path class="k45nei59j"/><path class="x1swjoy7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:headphone-sound"} {...others} />);
}

export default Component;
