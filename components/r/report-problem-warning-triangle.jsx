import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/bptx-vxlu.css';
import '../../css/t/tdih0tbvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="bptx-vxlu"/><path class="tdih0tbvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:report-problem-warning-triangle"} {...others} />);
}

export default Component;
