import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/obv9_7b8t.css';
import '../../css/v/vexengbun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="obv9_7b8t"/><path class="vexengbun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:modern-tv-issue"} {...others} />);
}

export default Component;
