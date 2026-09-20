import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ed90z1b2y.css';
import '../../css/t/t26pyqb6o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ed90z1b2y"/><path class="t26pyqb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pencil"} {...others} />);
}

export default Component;
