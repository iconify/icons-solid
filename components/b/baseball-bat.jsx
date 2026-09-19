import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/pdfib_b5n.css';
import '../../css/e/efl-uxvjp.css';
import '../../css/r/rzggd57gx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="pdfib_b5n"/><path class="efl-uxvjp"/><circle transform="matrix(-1 0 0 1 21 16)" class="rzggd57gx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:baseball-bat"} {...others} />);
}

export default Component;
