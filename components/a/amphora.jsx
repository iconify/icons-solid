import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lmxkc6yly.css';
import '../../css/f/ftopu8bmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lmxkc6yly"/><path class="ftopu8bmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:amphora"} {...others} />);
}

export default Component;
