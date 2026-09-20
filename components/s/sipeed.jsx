import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rld-_ccic.css';
import '../../css/v/vl74ao08p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rld-_ccic"/><path class="vl74ao08p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sipeed"} {...others} />);
}

export default Component;
