import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t12pdhbtt.css';
import '../../css/e/ef5y_r35k.css';
import '../../css/f/fi-43sb1e.css';
import '../../css/t/t0yodebcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t12pdhbtt"/><path class="ef5y_r35k"/><path class="fi-43sb1e"/><path class="t0yodebcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-dot"} {...others} />);
}

export default Component;
