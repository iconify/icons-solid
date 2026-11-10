import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3q7xqb5p.css';
import '../../css/f/fi-43sb1e.css';
import '../../css/t/t0yodebcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i3q7xqb5p"/><path class="fi-43sb1e"/><path class="t0yodebcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-plus"} {...others} />);
}

export default Component;
