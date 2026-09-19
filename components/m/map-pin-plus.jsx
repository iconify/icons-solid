import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hyun090pu.css';
import '../../css/c/cy2n9jzik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hyun090pu"/><path class="cy2n9jzik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:map-pin-plus"} {...others} />);
}

export default Component;
