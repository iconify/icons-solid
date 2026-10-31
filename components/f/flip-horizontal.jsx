import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sonegh7xo.css';
import '../../css/w/w92yhnbeq.css';
import '../../css/t/tpxbl5_6d.css';
import '../../css/b/b1e4x0bzx.css';
import '../../css/q/q8gipzxgs.css';
import '../../css/p/pt2w9256h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="sonegh7xo wm-shadow"/><path class="w92yhnbeq wm-shadow"/><path class="tpxbl5_6d"/><path class="b1e4x0bzx"/><path class="q8gipzxgs"/><path class="pt2w9256h wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:flip-horizontal"} {...others} />);
}

export default Component;
