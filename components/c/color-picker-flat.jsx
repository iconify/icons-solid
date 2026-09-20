import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kpd0mkbez.css';
import '../../css/u/ukh5fwbzb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kpd0mkbez"/><path clip-rule="evenodd" class="ukh5fwbzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:color-picker-flat"} {...others} />);
}

export default Component;
