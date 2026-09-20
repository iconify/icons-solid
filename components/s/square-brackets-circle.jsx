import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/srv0tukcb.css';
import '../../css/j/jtlouza2l.css';
import '../../css/y/ybrvgabve.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="srv0tukcb"/><path class="jtlouza2l"/><path class="ybrvgabve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:square-brackets-circle"} {...others} />);
}

export default Component;
