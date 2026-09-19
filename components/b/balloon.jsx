import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uxb6odrtq.css';
import '../../css/z/zjz2e1flz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uxb6odrtq"/><path class="zjz2e1flz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:balloon"} {...others} />);
}

export default Component;
