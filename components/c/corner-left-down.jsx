import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t75ebh15i.css';
import '../../css/u/uh9l1odyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t75ebh15i"/><path class="uh9l1odyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:corner-left-down"} {...others} />);
}

export default Component;
