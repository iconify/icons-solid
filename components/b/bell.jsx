import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aqdlylbqk.css';
import '../../css/i/i-50d2biz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="aqdlylbqk"/><path class="i-50d2biz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:bell"} {...others} />);
}

export default Component;
