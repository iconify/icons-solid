import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a41ny8bfc.css';
import '../../css/r/rs1_bdbxx.css';
import '../../css/l/lcjx0qb2l.css';
import '../../css/x/xkuwsw8ka.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="a41ny8bfc"/><path class="rs1_bdbxx"/><path class="lcjx0qb2l"/><path class="xkuwsw8ka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:symbol-double-x"} {...others} />);
}

export default Component;
