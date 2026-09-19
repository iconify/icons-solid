import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h_kbtrb3b.css';
import '../../css/d/diuyhlbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h_kbtrb3b"/><path class="diuyhlbhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-key"} {...others} />);
}

export default Component;
