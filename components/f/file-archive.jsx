import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vg631rblq.css';
import '../../css/g/gszrskb4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vg631rblq"/><path class="gszrskb4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-archive"} {...others} />);
}

export default Component;
