import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mon75_bzw.css';
import '../../css/e/ey1_qvbkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mon75_bzw"/><path class="ey1_qvbkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-underline-dotted"} {...others} />);
}

export default Component;
