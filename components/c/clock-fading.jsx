import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lr5ebea-a.css';
import '../../css/i/iddrhtujz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lr5ebea-a"/><path class="iddrhtujz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clock-fading"} {...others} />);
}

export default Component;
