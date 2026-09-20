import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/yk5i701wb.css';
import '../../css/p/ptkmnzomc.css';
import '../../css/b/brx-gnbny.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="yk5i701wb"/><path class="ptkmnzomc"/><path class="brx-gnbny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:donut"} {...others} />);
}

export default Component;
