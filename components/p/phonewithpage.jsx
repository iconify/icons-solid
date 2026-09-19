import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mozc1bb5c.css';
import '../../css/a/a1ypjyb_n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mozc1bb5c"/><path class="a1ypjyb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:phonewithpage"} {...others} />);
}

export default Component;
