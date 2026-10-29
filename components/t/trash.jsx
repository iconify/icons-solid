import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxkycjbej.css';
import '../../css/f/fff81-bmi.css';
import '../../css/f/flstcrbhi.css';
import '../../css/o/o71e8i_kg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxkycjbej wm-a"/><path class="fff81-bmi wm-k"/><path class="flstcrbhi wm-k"/><path class="o71e8i_kg wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:trash"} {...others} />);
}

export default Component;
