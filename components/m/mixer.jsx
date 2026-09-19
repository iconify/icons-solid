import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rfguhzb-u.css';
import '../../css/n/ny4p4yuul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rfguhzb-u"/><path class="ny4p4yuul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mixer"} {...others} />);
}

export default Component;
