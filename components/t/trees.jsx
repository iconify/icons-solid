import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hqtl-_k4s.css';
import '../../css/c/c5fpjcc5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hqtl-_k4s"/><path class="c5fpjcc5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:trees"} {...others} />);
}

export default Component;
