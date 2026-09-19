import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/ne1bocb1e.css';
import '../../css/t/t66mjmboe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ne1bocb1e"/><path class="t66mjmboe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-exclamation-point"} {...others} />);
}

export default Component;
