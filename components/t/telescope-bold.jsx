import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nj3877h8f.css';
import '../../css/q/qus9g24-x.css';
import '../../css/b/bej489v3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nj3877h8f"/><path class="qus9g24-x"/><path class="bej489v3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:telescope-bold"} {...others} />);
}

export default Component;
