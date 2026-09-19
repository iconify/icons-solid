import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/msw74ni7j.css';
import '../../css/e/e4x0wjlqy.css';
import '../../css/z/z1iohkbtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="msw74ni7j"/><path class="e4x0wjlqy"/><path class="z1iohkbtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:yoga"} {...others} />);
}

export default Component;
