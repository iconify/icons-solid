import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ufcwscb_k.css';
import '../../css/j/j_-3_octb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ufcwscb_k"/><path class="j_-3_octb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-case-sensitive"} {...others} />);
}

export default Component;
