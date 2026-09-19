import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tmq6s0krk.css';
import '../../css/d/dzn15qbva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tmq6s0krk"/><path class="dzn15qbva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-headphone"} {...others} />);
}

export default Component;
