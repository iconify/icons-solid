import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffshe1a3t.css';
import '../../css/y/yiyj44ijg.css';
import '../../css/c/c0t05sg1n.css';
import '../../css/g/g-dnhn00c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ffshe1a3t"/><path class="yiyj44ijg"/><path class="c0t05sg1n"/><path class="g-dnhn00c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:waiting-appointments-calendar"} {...others} />);
}

export default Component;
