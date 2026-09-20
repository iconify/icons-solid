import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/knjrtpsva.css';
import '../../css/c/c-qxuxb6m.css';
import '../../css/x/xmhg6obja.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="knjrtpsva"/><path class="c-qxuxb6m"/><path class="xmhg6obja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:keyboard"} {...others} />);
}

export default Component;
