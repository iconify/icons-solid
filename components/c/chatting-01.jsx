import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ejl_huvrw.css';
import '../../css/v/v5m4o4ojx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ejl_huvrw"/><path class="v5m4o4ojx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chatting-01"} {...others} />);
}

export default Component;
