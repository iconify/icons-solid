import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwcdh92ry.css';
import '../../css/h/hhenyhbok.css';
import '../../css/x/xr26tqb7s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rwcdh92ry"/><path class="hhenyhbok"/><path class="xr26tqb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kherad-dark"} {...others} />);
}

export default Component;
