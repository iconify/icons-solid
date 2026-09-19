import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lpqayccmk.css';
import '../../css/w/w-sskwbqs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lpqayccmk"/><path class="w-sskwbqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:iteration-cw"} {...others} />);
}

export default Component;
