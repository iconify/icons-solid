import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/upw8f7bde.css';
import '../../css/y/ycdjovcgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="upw8f7bde"/><path class="ycdjovcgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-wrap"} {...others} />);
}

export default Component;
