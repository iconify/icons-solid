import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g9wtjkbuo.css';
import '../../css/h/h4iqv8ecx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g9wtjkbuo"/><path class="h4iqv8ecx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-bag-remove"} {...others} />);
}

export default Component;
