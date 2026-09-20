import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/ketgzibwl.css';
import '../../css/q/qeti59buh.css';
import '../../css/x/xqwhzubqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ketgzibwl"/><path class="qeti59buh"/><path class="xqwhzubqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:cashier-machine-2-flat"} {...others} />);
}

export default Component;
