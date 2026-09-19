import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/et3i3ja-x.css';
import '../../css/d/dmxr1lg4z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="et3i3ja-x"/><path class="dmxr1lg4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:seedling"} {...others} />);
}

export default Component;
