import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kkgqdibtc.css';
import '../../css/c/comurw1ry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kkgqdibtc"/><path class="comurw1ry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bandage"} {...others} />);
}

export default Component;
