import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yzx0mb0bw.css';
import '../../css/t/t8m6ab_md.css';
import '../../css/i/i4pr7mb_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="yzx0mb0bw"/><path class="t8m6ab_md"/><path class="i4pr7mb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:palette-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
