import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j057kdpbu.css';
import '../../css/h/h8uawnbzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j057kdpbu"/><path class="h8uawnbzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-security"} {...others} />);
}

export default Component;
