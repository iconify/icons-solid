import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/os1b0yi3n.css';
import '../../css/z/zrq7btb1h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="os1b0yi3n"/><path class="zrq7btb1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:multi-triangular-two"} {...others} />);
}

export default Component;
