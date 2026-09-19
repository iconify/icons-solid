import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l546r6byy.css';
import '../../css/d/dqrzf1bnz.css';
import '../../css/a/avr8ui1vm.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l546r6byy"/><path class="dqrzf1bnz"/><path class="avr8ui1vm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:plus-print"} {...others} />);
}

export default Component;
