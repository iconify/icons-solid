import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5p-pccsc.css';
import '../../css/m/mitbif5th.css';
import '../../css/j/jmv7v2izv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="e5p-pccsc"/><path class="mitbif5th"/><path class="jmv7v2izv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:fire-alarm-2"} {...others} />);
}

export default Component;
