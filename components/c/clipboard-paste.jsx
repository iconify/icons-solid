import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rsg-wmbbd.css';
import '../../css/x/x8_ephbyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rsg-wmbbd"/><path class="x8_ephbyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clipboard-paste"} {...others} />);
}

export default Component;
