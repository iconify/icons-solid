import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dup_ysbqy.css';
import '../../css/u/u244kxb7s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dup_ysbqy"/><path class="u244kxb7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:credit-card-link"} {...others} />);
}

export default Component;
