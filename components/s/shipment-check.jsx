import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7jibfbce.css';
import '../../css/j/j4r9vwtdx.css';
import '../../css/h/hlf8r6vle.css';
import '../../css/d/de9x5pb7n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="y7jibfbce"/><path class="j4r9vwtdx"/><path class="hlf8r6vle"/><path class="de9x5pb7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shipment-check"} {...others} />);
}

export default Component;
