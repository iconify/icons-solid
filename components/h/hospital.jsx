import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4nrxputc.css';
import '../../css/r/r9tmpk6mi.css';
import '../../css/k/ktsd8vbsp.css';
import '../../css/h/h1u5z0bug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d4nrxputc"/><path class="r9tmpk6mi"/><path class="ktsd8vbsp"/><path class="h1u5z0bug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hospital"} {...others} />);
}

export default Component;
