import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyhbxz_1c.css';
import '../../css/u/u6fgoyb9s.css';
import '../../css/z/zh-hxsbiu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jyhbxz_1c"/><path class="u6fgoyb9s"/><path class="zh-hxsbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-meter-20"} {...others} />);
}

export default Component;
