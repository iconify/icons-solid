import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hz78iv51y.css';
import '../../css/x/x2kte-byy.css';
import '../../css/q/qj43urbvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="hz78iv51y"/><path class="x2kte-byy"/><path class="qj43urbvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cake-sharp-duotone"} {...others} />);
}

export default Component;
