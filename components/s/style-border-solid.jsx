import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h100pjbuq.css';
import '../../css/e/eeb6_wvec.css';
import '../../css/k/kigc7uo3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h100pjbuq"><path class="eeb6_wvec"/><path class="kigc7uo3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:style-border-solid"} {...others} />);
}

export default Component;
