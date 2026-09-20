import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/v_vhlcbpc.css';
import '../../css/r/r-y8-pbrh.css';
import '../../css/g/g1vfkqbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="v_vhlcbpc"/><path class="r-y8-pbrh"/><path class="g1vfkqbjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-rol-light"} {...others} />);
}

export default Component;
