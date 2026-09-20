import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs69m8bix.css';
import '../../css/o/ov3odebtm.css';
import '../../css/k/krx52xw3x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hs69m8bix"/><path class="ov3odebtm"/><path class="krx52xw3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flaresolverr"} {...others} />);
}

export default Component;
