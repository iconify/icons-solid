import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/j/jaj-odh0b.css';
import '../../css/e/ehpx-dulg.css';
import '../../css/c/cxi2p3iuj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="jaj-odh0b"/><path class="ehpx-dulg"/><path class="cxi2p3iuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gastrointestinal"} {...others} />);
}

export default Component;
