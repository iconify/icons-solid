import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-gp3ubnn.css';
import '../../css/i/i81roqrqj.css';
import '../../css/i/iwaim9bcp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="s-gp3ubnn"/><path clip-rule="evenodd" class="i81roqrqj"/><path clip-rule="evenodd" class="iwaim9bcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:information-desk-customer-flat"} {...others} />);
}

export default Component;
