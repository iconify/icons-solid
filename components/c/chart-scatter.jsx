import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kifgjgbdq.css';
import '../../css/c/czz5en-9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kifgjgbdq"/><path class="czz5en-9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-scatter"} {...others} />);
}

export default Component;
