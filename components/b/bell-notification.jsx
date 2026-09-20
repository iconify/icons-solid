import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qy-anqdzh.css';
import '../../css/l/ld4wg6d0k.css';
import '../../css/t/tgxosabxs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qy-anqdzh"/><path class="ld4wg6d0k"/><path class="tgxosabxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:bell-notification"} {...others} />);
}

export default Component;
