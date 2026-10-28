import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hc4fnabdq.css';
import '../../css/x/xw2n5-bda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hc4fnabdq"/><path class="xw2n5-bda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:axis-x"} {...others} />);
}

export default Component;
