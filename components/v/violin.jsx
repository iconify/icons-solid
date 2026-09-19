import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa1wb8bix.css';
import '../../css/w/wrryygb0v.css';
import '../../css/m/m5hb6s3rs.css';
import '../../css/d/dyutw95lp.css';
import '../../css/d/d7gazbcaz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qa1wb8bix"/><path class="wrryygb0v"/><path class="m5hb6s3rs"/><path class="dyutw95lp"/><path class="d7gazbcaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:violin"} {...others} />);
}

export default Component;
