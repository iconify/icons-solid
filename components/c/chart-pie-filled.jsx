import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zqcq9hbfy.css';
import '../../css/g/gw3_42bwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zqcq9hbfy"/><path class="gw3_42bwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-pie-filled"} {...others} />);
}

export default Component;
