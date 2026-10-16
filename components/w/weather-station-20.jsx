import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3sh15b-h.css';
import '../../css/m/mwwltnb7y.css';
import '../../css/f/fuabohb_q.css';
import '../../css/n/n2rzbnimr.css';
import '../../css/k/kvl9ucc0s.css';
import '../../css/n/n0oj8po7r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n3sh15b-h"/><path class="mwwltnb7y"/><path class="fuabohb_q"/><path class="n2rzbnimr"/><path class="kvl9ucc0s"/><path class="n0oj8po7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:weather-station-20"} {...others} />);
}

export default Component;
