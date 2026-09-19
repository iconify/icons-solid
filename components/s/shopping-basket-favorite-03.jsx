import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rtrczgbgk.css';
import '../../css/s/sqtvjacne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rtrczgbgk"/><path class="sqtvjacne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-favorite-03"} {...others} />);
}

export default Component;
