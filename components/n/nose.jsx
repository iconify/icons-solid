import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xucuw-bde.css';
import '../../css/y/y8gwbgbko.css';
import '../../css/n/nu3mrp6zx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xucuw-bde"/><path class="y8gwbgbko"/><path class="nu3mrp6zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:nose"} {...others} />);
}

export default Component;
