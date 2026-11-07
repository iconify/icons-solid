import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytjvhenfl.css';
import '../../css/d/df6t0qb7f.css';
import '../../css/m/mgt7vwb6i.css';
import '../../css/q/qawukvmtm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ytjvhenfl"/><path clip-rule="evenodd" class="df6t0qb7f"/><path clip-rule="evenodd" class="mgt7vwb6i"/><path clip-rule="evenodd" class="qawukvmtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-check-outline"} {...others} />);
}

export default Component;
