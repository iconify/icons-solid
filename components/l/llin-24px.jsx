import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/so0qh0b3x.css';
import '../../css/e/eyy1xci_o.css';
import '../../css/r/rnq02cbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="so0qh0b3x"/><path class="eyy1xci_o"/><path class="rnq02cbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:llin-24px"} {...others} />);
}

export default Component;
