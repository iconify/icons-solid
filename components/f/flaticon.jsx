import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j35tcj7js.css';
import '../../css/x/xel42qdja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j35tcj7js"/><path class="xel42qdja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flaticon"} {...others} />);
}

export default Component;
