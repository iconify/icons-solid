import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uuber1bzf.css';
import '../../css/v/vjp_-jb6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="uuber1bzf"/><path class="vjp_-jb6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:bidirectional-charging"} {...others} />);
}

export default Component;
