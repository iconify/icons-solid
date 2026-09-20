import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfumhs5dd.css';
import '../../css/n/nsh88-uyo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sfumhs5dd"/><path class="nsh88-uyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:docmost"} {...others} />);
}

export default Component;
