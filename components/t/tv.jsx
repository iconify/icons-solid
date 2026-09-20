import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qj5gj-d9w.css';
import '../../css/q/qdn88l2uv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="qj5gj-d9w"/><path class="qdn88l2uv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:tv"} {...others} />);
}

export default Component;
