import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/od6v5mlgj.css';
import '../../css/x/xia6hrhwq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="od6v5mlgj"/><path class="xia6hrhwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:border-bold"} {...others} />);
}

export default Component;
