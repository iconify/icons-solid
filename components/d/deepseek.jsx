import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e3kp9xbgx.css';
import '../../css/j/jp879rb9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e3kp9xbgx"/><path class="jp879rb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:deepseek"} {...others} />);
}

export default Component;
