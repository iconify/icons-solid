import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/o/ol0xvobbo.css';
import '../../css/k/k-1_yxb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="ol0xvobbo"/><path class="k-1_yxb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:corner-right-down"} {...others} />);
}

export default Component;
