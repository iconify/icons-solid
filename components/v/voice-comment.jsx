import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x99iestqa.css';
import '../../css/b/b2hj-bbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x99iestqa"/><path class="b2hj-bbcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:voice-comment"} {...others} />);
}

export default Component;
