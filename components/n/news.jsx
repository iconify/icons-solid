import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r3m61jblq.css';
import '../../css/i/ima3w_b1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r3m61jblq"/><path class="ima3w_b1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:news"} {...others} />);
}

export default Component;
