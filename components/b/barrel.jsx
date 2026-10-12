import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-65ix85h.css';
import '../../css/r/r6acznbrj.css';
import '../../css/f/f1o434bfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y-65ix85h"/><path class="r6acznbrj"/><path class="f1o434bfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:barrel"} {...others} />);
}

export default Component;
