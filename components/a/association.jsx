import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/spu85samc.css';
import '../../css/g/g0frtbcqz.css';
import '../../css/f/f2_9c4brj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="spu85samc"/><path class="g0frtbcqz"/><path class="f2_9c4brj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:association"} {...others} />);
}

export default Component;
