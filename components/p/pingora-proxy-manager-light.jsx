import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rttpcbboh.css';
import '../../css/j/jl229qvbe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rttpcbboh"/><path class="jl229qvbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pingora-proxy-manager-light"} {...others} />);
}

export default Component;
