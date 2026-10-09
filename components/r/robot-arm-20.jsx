import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy2ju-cra.css';
import '../../css/l/lqfl87oqj.css';
import '../../css/s/swlc9x42h.css';
import '../../css/w/w5iv359ji.css';
import '../../css/m/mtv6tabvu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hy2ju-cra"/><path class="lqfl87oqj"/><path class="swlc9x42h"/><path class="w5iv359ji"/><path class="mtv6tabvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:robot-arm-20"} {...others} />);
}

export default Component;
