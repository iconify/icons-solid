import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/swwwjgg3w.css';
import '../../css/f/fi7_5bc1m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="swwwjgg3w"/><path class="fi7_5bc1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:link-two"} {...others} />);
}

export default Component;
