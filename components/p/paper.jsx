import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/y2yhntbjs.css';
import '../../css/e/ezi0_rbbf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="h01tyzbfu"><path class="y2yhntbjs"/><circle class="ezi0_rbbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:paper"} {...others} />);
}

export default Component;
