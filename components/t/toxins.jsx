import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/yfht0cwhz.css';
import '../../css/a/ai3i-1iaj.css';
import '../../css/k/kvwgoxdqi.css';
import '../../css/f/fto0fpt6d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path clip-rule="evenodd" class="yfht0cwhz"/><path class="ai3i-1iaj"/><path class="kvwgoxdqi"/><path class="fto0fpt6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:toxins"} {...others} />);
}

export default Component;
