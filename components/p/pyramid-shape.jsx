import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v11_qcbal.css';
import '../../css/e/e9gw0tbbs.css';
import '../../css/w/wo2jc8b8t.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="v11_qcbal"/><path class="e9gw0tbbs"/><path class="wo2jc8b8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pyramid-shape"} {...others} />);
}

export default Component;
