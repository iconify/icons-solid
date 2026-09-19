import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/feqkhlenc.css';
import '../../css/m/m2rrqgazx.css';
import '../../css/r/rkoylwbig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="feqkhlenc"/><path class="m2rrqgazx"/><path class="rkoylwbig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dish-washer"} {...others} />);
}

export default Component;
