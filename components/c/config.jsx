import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/r/rwpufsici.css';
import '../../css/u/ue4yllbit.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="rwpufsici"/><path class="ue4yllbit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:config"} {...others} />);
}

export default Component;
