import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/id4dx6btg.css';
import '../../css/w/wsmq27iiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="id4dx6btg"/><path class="wsmq27iiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:bag-light"} {...others} />);
}

export default Component;
