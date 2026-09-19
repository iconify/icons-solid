import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i9vm9blzj.css';
import '../../css/c/ccg5dxidu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i9vm9blzj"/><path class="ccg5dxidu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:left-angle"} {...others} />);
}

export default Component;
