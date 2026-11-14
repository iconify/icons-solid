import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/by47hzbvo.css';
import '../../css/i/ih-rr2b-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="by47hzbvo"/><path class="ih-rr2b-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-lock"} {...others} />);
}

export default Component;
