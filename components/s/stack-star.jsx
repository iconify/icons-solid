import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cimf4bblu.css';
import '../../css/w/wcw8hj87u.css';
import '../../css/k/kz5pr1h-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cimf4bblu"/><path class="wcw8hj87u"/><path class="kz5pr1h-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stack-star"} {...others} />);
}

export default Component;
