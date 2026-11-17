import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl-0u3b3j.css';
import '../../css/w/wso4qob3f.css';
import '../../css/i/i4z-g0qwt.css';
import '../../css/d/dehkihbqm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pl-0u3b3j"/><path class="wso4qob3f"/><path class="i4z-g0qwt"/><path class="dehkihbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:seamside-dark"} {...others} />);
}

export default Component;
