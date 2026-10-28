import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4ttrfbjj.css';
import '../../css/k/kftnn9kbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p4ttrfbjj"/><path class="kftnn9kbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-bgn"} {...others} />);
}

export default Component;
