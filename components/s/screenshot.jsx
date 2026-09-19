import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b0yqckn-b.css';
import '../../css/l/l9q8v2b_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b0yqckn-b"/><path class="l9q8v2b_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:screenshot"} {...others} />);
}

export default Component;
