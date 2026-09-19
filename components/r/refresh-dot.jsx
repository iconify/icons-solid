import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lm939zbdz.css';
import '../../css/p/p_klmybkg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lm939zbdz"/><path class="p_klmybkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:refresh-dot"} {...others} />);
}

export default Component;
