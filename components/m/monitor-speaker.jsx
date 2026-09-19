import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ok65f3bhe.css';
import '../../css/a/a03vgacgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ok65f3bhe"/><path class="a03vgacgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:monitor-speaker"} {...others} />);
}

export default Component;
