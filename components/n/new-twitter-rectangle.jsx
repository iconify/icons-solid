import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/ve55a59qk.css';
import '../../css/f/fytlo8puk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ve55a59qk"/><path class="fytlo8puk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:new-twitter-rectangle"} {...others} />);
}

export default Component;
