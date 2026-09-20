import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lipr7d2ci.css';
import '../../css/w/wj0xsxwpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lipr7d2ci"/><path class="wj0xsxwpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-2-broken"} {...others} />);
}

export default Component;
