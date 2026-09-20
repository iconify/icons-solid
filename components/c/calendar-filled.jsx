import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/olnv4zb1i.css';
import '../../css/z/zceqwoblb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="olnv4zb1i"/><path class="zceqwoblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:calendar-filled"} {...others} />);
}

export default Component;
