import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bri926yrn.css';
import '../../css/b/b1qs3_bbh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bri926yrn"/><circle class="b1qs3_bbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:whitesun"} {...others} />);
}

export default Component;
