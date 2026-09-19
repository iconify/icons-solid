import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whirn3xfi.css';
import '../../css/w/wt66k5bgh.css';
import '../../css/x/x884hoqjw.css';
import '../../css/u/uus91tb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="whirn3xfi"/><path clip-rule="evenodd" class="wt66k5bgh"/><path class="x884hoqjw"/><path clip-rule="evenodd" class="uus91tb3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:biomarker-24px"} {...others} />);
}

export default Component;
