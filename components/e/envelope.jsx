import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtqmscb8b.css';
import '../../css/y/yujr8pbfe.css';
import '../../css/j/jpvlp2bch.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vtqmscb8b"/><path class="yujr8pbfe"/><path class="jpvlp2bch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:envelope"} {...others} />);
}

export default Component;
