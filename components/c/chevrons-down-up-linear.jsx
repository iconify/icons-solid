import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fybv11bra.css';
import '../../css/f/fsd93ib2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fybv11bra"/><path class="fsd93ib2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-down-up-linear"} {...others} />);
}

export default Component;
