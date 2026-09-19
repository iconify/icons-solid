import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcwvm_w5y.css';
import '../../css/o/o635ptb1c.css';
import '../../css/k/k0gek5bzh.css';
import '../../css/d/dutexhw9m.css';
import '../../css/z/z__t2ib4m.css';
import '../../css/k/kanpt_b2h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dcwvm_w5y"/><circle class="o635ptb1c"/><path class="k0gek5bzh"/><path class="dutexhw9m"/><path class="z__t2ib4m"/><path class="kanpt_b2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sunsetoverbuildings"} {...others} />);
}

export default Component;
