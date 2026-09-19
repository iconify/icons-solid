import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/ups30ep6k.css';
import '../../css/y/ydtkho0hx.css';
import '../../css/q/qc9g0cb4i.css';
import '../../css/s/sukhi24yb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ups30ep6k"/><path class="ydtkho0hx"/><path class="qc9g0cb4i"/><path class="sukhi24yb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-mail"} {...others} />);
}

export default Component;
