import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/t/tv_fp85af.css';
import '../../css/f/f1-3uvb1f.css';
import '../../css/d/djt_l2vuk.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="tv_fp85af"/><path class="f1-3uvb1f"/><path class="djt_l2vuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:book-text"} {...others} />);
}

export default Component;
