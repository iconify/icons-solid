import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sk778ol3e.css';
import '../../css/w/w-y29rxdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sk778ol3e"/><path class="w-y29rxdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:circle-arrow-out-up-right"} {...others} />);
}

export default Component;
