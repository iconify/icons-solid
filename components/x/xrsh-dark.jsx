import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kao65-mts.css';
import '../../css/x/xah9mvbce.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kao65-mts"/><path class="xah9mvbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:xrsh-dark"} {...others} />);
}

export default Component;
