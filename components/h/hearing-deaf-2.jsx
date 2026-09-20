import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgsrazb5x.css';
import '../../css/e/ee5gr6bsf.css';
import '../../css/s/slr422bsv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="mgsrazb5x"/><path class="ee5gr6bsf"/><path class="slr422bsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hearing-deaf-2"} {...others} />);
}

export default Component;
