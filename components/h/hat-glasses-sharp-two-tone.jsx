import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/snmui6fdl.css';
import '../../css/b/baq8yo51u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="snmui6fdl"/><path class="baq8yo51u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hat-glasses-sharp-two-tone"} {...others} />);
}

export default Component;
