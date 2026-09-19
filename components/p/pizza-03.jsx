import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pwq6upb4i.css';
import '../../css/w/wel1v5b6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pwq6upb4i"/><path class="wel1v5b6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pizza-03"} {...others} />);
}

export default Component;
