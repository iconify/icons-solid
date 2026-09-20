import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kwempktlv.css';
import '../../css/i/i334jtili.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="kwempktlv"/><path class="i334jtili"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:ticket-alt-light"} {...others} />);
}

export default Component;
