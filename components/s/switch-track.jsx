import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nhtrywblz.css';
import '../../css/a/a4mia7bvg.css';
import '../../css/n/nv5rkmb7z.css';
import '../../css/w/wy-4qo40w.css';
import '../../css/j/ji_-v7hcn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nhtrywblz"/><path class="a4mia7bvg"/><path class="nv5rkmb7z"/><path class="wy-4qo40w"/><path class="ji_-v7hcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:switch-track"} {...others} />);
}

export default Component;
