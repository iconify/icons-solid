import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kaxlnzbpc.css';
import '../../css/s/sjprw7bfy.css';
import '../../css/n/ngc_fgbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kaxlnzbpc"/><path clip-rule="evenodd" class="sjprw7bfy"/><path class="ngc_fgbhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ambulance-outline-24px"} {...others} />);
}

export default Component;
