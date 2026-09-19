import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mw1_gqpsk.css';
import '../../css/s/shupqpxva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mw1_gqpsk"/><path class="shupqpxva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:spotlight"} {...others} />);
}

export default Component;
