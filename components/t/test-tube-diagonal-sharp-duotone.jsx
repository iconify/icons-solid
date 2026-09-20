import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pel4bdbze.css';
import '../../css/s/s-xpk0xxq.css';
import '../../css/a/axh_y-hbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="pel4bdbze"/><path class="s-xpk0xxq"/><path class="axh_y-hbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:test-tube-diagonal-sharp-duotone"} {...others} />);
}

export default Component;
