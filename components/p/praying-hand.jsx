import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2b4-dugr.css';
import '../../css/b/b899kmvyi.css';
import '../../css/y/ynhj9080h.css';
import '../../css/v/vngl0mbeq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="h2b4-dugr"/><path class="b899kmvyi"/><path class="ynhj9080h"/><path class="vngl0mbeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:praying-hand"} {...others} />);
}

export default Component;
