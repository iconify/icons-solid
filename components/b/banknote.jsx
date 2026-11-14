import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vewp37bih.css';
import '../../css/d/dgn65lb1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vewp37bih"/><path class="dgn65lb1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:banknote"} {...others} />);
}

export default Component;
