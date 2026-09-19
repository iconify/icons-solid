import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d48axjbqb.css';
import '../../css/q/qznxftb5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d48axjbqb"/><path class="qznxftb5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:creative-commons"} {...others} />);
}

export default Component;
