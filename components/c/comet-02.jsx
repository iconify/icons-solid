import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tue48hagb.css';
import '../../css/h/hz913ib_x.css';
import '../../css/o/o5mxm-bli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tue48hagb"/><path class="hz913ib_x"/><path class="o5mxm-bli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:comet-02"} {...others} />);
}

export default Component;
