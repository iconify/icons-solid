import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hx24udb8u.css';
import '../../css/q/qk5l60_1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hx24udb8u"/><path class="qk5l60_1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:four-k"} {...others} />);
}

export default Component;
