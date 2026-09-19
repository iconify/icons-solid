import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jp64x_82s.css';
import '../../css/v/v984nccvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jp64x_82s"/><path class="v984nccvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:vegan"} {...others} />);
}

export default Component;
