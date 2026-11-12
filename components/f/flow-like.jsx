import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rku15hbsi.css';
import '../../css/p/pp9v2l8_u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rku15hbsi"/><path class="pp9v2l8_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flow-like"} {...others} />);
}

export default Component;
