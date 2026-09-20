import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gjsx1wbvw.css';
import '../../css/f/f3so53r7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="gjsx1wbvw"/><path class="f3so53r7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:map-pin-x-sharp-two-tone"} {...others} />);
}

export default Component;
