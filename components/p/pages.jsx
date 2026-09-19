import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc10iubcv.css';
import '../../css/f/f6z-4gr0p.css';
import '../../css/x/xoxh_cz1d.css';
import '../../css/d/dwhvop1-h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mc10iubcv"/><path class="f6z-4gr0p"/><path class="xoxh_cz1d"/><path class="dwhvop1-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pages"} {...others} />);
}

export default Component;
