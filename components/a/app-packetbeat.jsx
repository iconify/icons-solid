import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yspu1txce.css';
import '../../css/e/em8icc8zx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ouiIcon__fillSecondary yspu1txce"/><path class="em8icc8zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-packetbeat"} {...others} />);
}

export default Component;
