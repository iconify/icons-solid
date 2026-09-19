import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hj-q_bbkm.css';
import '../../css/l/l16ftss7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hj-q_bbkm"/><path class="l16ftss7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:book-bookmark-01"} {...others} />);
}

export default Component;
