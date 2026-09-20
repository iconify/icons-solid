import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4-p6eb0b.css';
import '../../css/l/lbof8_bsn.css';
import '../../css/c/c29gtoapi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="j4-p6eb0b"/><path class="lbof8_bsn"/><path class="c29gtoapi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:volcano"} {...others} />);
}

export default Component;
