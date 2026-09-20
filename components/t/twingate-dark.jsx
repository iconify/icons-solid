import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l65g6bzgr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l65g6bzgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:twingate-dark"} {...others} />);
}

export default Component;
