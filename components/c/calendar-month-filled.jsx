import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rmq73q8fs.css';
import '../../css/o/olnv4zb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rmq73q8fs"/><path class="olnv4zb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:calendar-month-filled"} {...others} />);
}

export default Component;
