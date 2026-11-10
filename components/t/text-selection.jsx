import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oswk1un1o.css';
import '../../css/g/g_acvkbsy.css';
import '../../css/t/t3i9subxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oswk1un1o"/><path class="g_acvkbsy"/><path class="t3i9subxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-selection"} {...others} />);
}

export default Component;
