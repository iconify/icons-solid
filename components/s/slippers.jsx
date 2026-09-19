import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wmywwbk2d.css';
import '../../css/b/badn2ib8x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="wmywwbk2d"/><path class="badn2ib8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:slippers"} {...others} />);
}

export default Component;
