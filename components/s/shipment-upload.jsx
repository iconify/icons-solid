import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hc9qppx4x.css';
import '../../css/j/j4r9vwtdx.css';
import '../../css/h/hlf8r6vle.css';
import '../../css/b/bktdwf0jp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hc9qppx4x"/><path class="j4r9vwtdx"/><path class="hlf8r6vle"/><path class="bktdwf0jp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shipment-upload"} {...others} />);
}

export default Component;
