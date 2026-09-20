import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ge95rcb6n.css';
import '../../css/u/ufq0labsn.css';
import '../../css/j/jhgzhub8y.css';
import '../../css/o/o542_v8xh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ge95rcb6n"/><path class="ufq0labsn"/><path class="jhgzhub8y"/><path class="o542_v8xh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:city-hall"} {...others} />);
}

export default Component;
