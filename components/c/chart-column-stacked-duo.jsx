import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nx-1mqz9w.css';
import '../../css/s/sukohubkj.css';
import '../../css/c/c012e5boc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="nx-1mqz9w"/><path class="sukohubkj wm-a"/><path class="c012e5boc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-column-stacked-duo"} {...others} />);
}

export default Component;
