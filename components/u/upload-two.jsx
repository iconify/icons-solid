import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tnxwu2faj.css';
import '../../css/p/p9zkvvbfg.css';
import '../../css/w/w5_bwk5dr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="tnxwu2faj"/><path class="p9zkvvbfg"/><path class="w5_bwk5dr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:upload-two"} {...others} />);
}

export default Component;
