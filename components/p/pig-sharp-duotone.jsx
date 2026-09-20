import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/r7cku2d8b.css';
import '../../css/c/cd1i36bjz.css';
import '../../css/g/g1p6t0b1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="r7cku2d8b"/><path class="cd1i36bjz"/><path class="g1p6t0b1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pig-sharp-duotone"} {...others} />);
}

export default Component;
